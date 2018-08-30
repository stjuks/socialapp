const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const config = require('../config');
const authHelper = require('../helpers/auth');
const db = require('../db');
const { posts } = require('../db/queries');

const upload = multer({ storage: config.storage, limits: config.limits });

router.post('/create', authHelper.verifyToken, upload.single('image'), (req, res) => {
	const { caption } = req.body;
	const { user, file, fileValidationError } = req;

	if (fileValidationError) {
		return res.status(400).json({ msg: fileValidationError });
	}

	const sql = posts.create(user.user_id, caption, file.filename);

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

	const sql = posts.get(userId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	})
});

router.get('/following', authHelper.verifyToken, (req, res) => {
	const { user } = req;

	const sql = posts.getFollowing(user.user_id);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result.rows);
	});

});

router.post('/like', authHelper.verifyToken, (req, res) => {
	const { user } = req;
	const { isLike, postId } = req.body;

	let sql = isLike ? posts.like(user.user_id, postId) : posts.dislike(user.user_id, postId);

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json({})
	})

});

module.exports = router;