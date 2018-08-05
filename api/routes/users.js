const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const authHelper = require('../helpers/auth');
const db = require('../db/db');

router.get('/search', (req, res) => {
	const { query } = req.query

	if (query.length === 0) {
		return res.json([]);
	}

	const sql = `SELECT username, id FROM users 
		WHERE username LIKE ${mysql.escape(query + '%')} 
		ORDER BY username LIMIT 20;`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	})
});

router.get('/get/:username', authHelper.verifyToken, (req, res) => {
	const { username } = req.params;
	const { user } = req; 

	let sql = `SELECT id, 
		username,
		SUM(CASE WHEN followers.follower_id=${user.id} THEN 1 ELSE 0 END) as is_watcher_following,
		SUM(CASE WHEN followers.follower_id=users.id THEN 1 ELSE 0 END) as following_count,
		SUM(CASE WHEN followers.following_id=users.id THEN 1 ELSE 0 END) as follower_count
		FROM (users LEFT JOIN followers ON users.id=followers.follower_id OR users.id=followers.following_id) 
		WHERE username=${mysql.escape(username)}
		GROUP BY id;`;

	db.query(sql, (err, result) => {
		if (err) throw err;

		if (result.length === 0) return res.status(404).json({ msg: 'No user found!' });

		const user = result[0];
		let sql = `SELECT * FROM posts WHERE user_id=${user.id};`;

		db.query(sql, (err, result) => {
			if (err) throw err;
			user.posts = result;
			res.json(user);
		})
	})
})

module.exports = router;