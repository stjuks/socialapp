const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const config = require('../config');
const authHelper = require('../helpers/auth');
const db = require('../db/db');

const upload = multer({ storage: config.storage });

router.post('/create', authHelper.verifyToken, upload.single('image'), (req, res) => {
	const { caption } = req.body;
	const { user, file, fileValidationError } = req;

	if (fileValidationError) {
		return res.status(400).json({ msg: fileValidationError });
	}

	const sql = `INSERT INTO posts (user_id, caption, image) VALUES (${mysql.escape(user.id)}, ${mysql.escape(caption)}, ${mysql.escape(file.filename)});`;

	db.query(sql, (err, result) => {
		if (err) res.status(400).json({ msg: 'Error creating post!' });
		res.json({ msg: 'Post successfully added!' });
	})
});

router.get('/image/:imageName', (req, res) => {
	const { imageName } = req.params;
	
	const pathName = path.join(__dirname, '/../uploads/', imageName);
	const img = fs.readFileSync(pathName);

	if (img) {
		res.set({ 'Content-Type': 'image/png' });
		res.end(img, 'binary');
	} else {
		res.status(404).json({ msg: 'No image found!' });
	}
});

router.get('/get/:userId', (req, res) => {
	const { userId } = req.params;

	const sql = `SELECT * FROM posts WHERE user_id=${mysql.escape(userId)}`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	})
});

router.get('/following', authHelper.verifyToken, (req, res) => {
	const { user } = req;
	const post = {};

	const sql = `SELECT users.username, posts.*, Count(*) as likes
		FROM ((likes INNER JOIN posts ON likes.post_id=posts.post_id)
      	INNER JOIN users on users.id=posts.user_id)
      	WHERE posts.user_id IN
      	(SELECT following_id FROM followers WHERE follower_id=${mysql.escape(user.id)})
		GROUP BY likes.post_id;`

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	});

})

router.post('/like', authHelper.verifyToken, (req, res) => {
	const { user } = req;
	const { isLike, postId } = req.body;

	let sql = '';

	if (isLike) {
		sql = `INSERT INTO likes (user_id, post_id) VALUES (${mysql.escape(user.id)}, ${mysql.escape(postId)})`;
	} else {
		sql = `DELETE FROM likes WHERE user_id=${mysql.escape(user.id)} AND post_id=${mysql.escape(postId)}`;
	}

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json({})
	})

})

module.exports = router;