const express = require('express');
const router = express.Router();

const authHelper = require('../helpers/auth');
const db = require('../db');
const { users, posts } = require('../db/queries');

router.get('/search', (req, res) => {
	const { query } = req.query;

	if (query.length === 0) {
		return res.json([]);
	}

	const sql = users.search(query);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

router.get('/get/:userId', authHelper.verifyToken, (req, res) => {
	const { userId } = req.params;
	const { user } = req;

	let sql = users.getProfile(user.user_id, userId);

	db.query(sql, (err, result) => {
		if (err) throw err;

		if (result.rows.length === 0) return res.status(404).json({ msg: 'No user found!' });

		const user = result.rows[0];
		let sql = posts.get(user.user_id);

		db.query(sql, (err, result) => {
			if (err) throw err;
			user.posts = result.rows;
			res.json(user);
		})
	})
});

module.exports = router;