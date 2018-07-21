const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const authHelper = require('../helpers/auth');
const db = require('../db/db');

router.get('/follow/:followingId', authHelper.verifyToken, (req, res) => {
	const { followingId } = req.params;
	const { user } = req;

	if (user.id === followingId) {
		res.status(400).json({ msg: 'You can not follow yourself!' });
		return;
	}

	const sql = `INSERT INTO followers (follower_id, following_id) VALUES (${mysql.escape(user.id)}, ${mysql.escape(followingId)})`;
	db.query(sql, (err, result) => {
		if (err) {
			res.status(400).json({ msg: 'User does not exist or you already follow this user!' });
			return;
		}
		res.json({ msg: `You just followed user ${followingId}`});
	});

});

router.get('/unfollow/:followingId', authHelper.verifyToken, (req, res) => {
	const { followingId } = req.params;
	const { user } = req;

	if (user.id === followingId) {
		res.status(400).json({ msg: 'You can not unfollow yourself!' });
		return;
	}

	const sql = `DELETE FROM followers WHERE follower_id=${mysql.escape(user.id)} AND following_id=${mysql.escape(followingId)}`;
	db.query(sql, (err, result) => {
		if (err || result.affectedRows === 0) {
			res.status(400).json({ msg: 'User does not exist or you are not following this user!' });
			return;
		}
		res.json({ msg: `You just unfollowed user ${followingId}`})
	})

});

router.get('/followers/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = `SELECT id, username FROM users WHERE id IN (
		SELECT follower_id FROM followers WHERE following_id=${mysql.escape(userId)})`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	})
});

router.get('/following/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = `SELECT id, username FROM users WHERE id IN (
		SELECT following_id FROM followers WHERE follower_id=${mysql.escape(userId)})`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	})
})

module.exports = router;