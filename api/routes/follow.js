const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const authHelper = require('../helpers/auth');
const db = require('../db');
const { users } = require('../db/queries');

router.get('/follow/:followingId', authHelper.verifyToken, (req, res) => {
	const { followingId } = req.params;
	const { user } = req;

	if (user.id === followingId) {
		res.status(400).json({ msg: 'You can not follow yourself!' });
		return;
	}

	const sql = users.follow(user.user_id, followingId);

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

	const sql = users.unfollow(user.user_id, followingId);

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

	const sql = users.getFollowers(userId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

router.get('/following/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = users.getFollowing(userId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

module.exports = router;