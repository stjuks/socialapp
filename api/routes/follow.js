const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const { authHelper } = require('../helpers');
const db = require('../db');
const { Users } = require('../db/queries');

router.get('/follow/:followingId', authHelper.verifyToken, (req, res) => {
	const { followingId } = req.params;
	const { user } = req;

	if (user.userId === followingId) {
		return res.status(400).json({ msg: 'You can not follow yourself!' });
	}

	const sql = Users.follow(user.userId, followingId);

	db.query(sql, (err, result) => {
		if (err) {
			return res.status(400).json({ msg: 'User does not exist or you already follow this user!' });
		}
		res.end();
	});

});

router.get('/unfollow/:followingId', authHelper.verifyToken, (req, res) => {
	const { followingId } = req.params;
	const { user } = req;

	if (user.userId === followingId) {
		res.status(400).json({ msg: 'You can not unfollow yourself!' });
		return;
	}

	const sql = Users.unfollow(user.userId, followingId);

	db.query(sql, (err, result) => {
		if (err || result.affectedRows === 0) {
			return res.status(400).json({ msg: 'User does not exist or you are not following this user!' });
		}
		res.end();
	})

});

router.get('/followers/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = Users.getFollowers(userId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

router.get('/following/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = Users.getFollowing(userId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

module.exports = router;