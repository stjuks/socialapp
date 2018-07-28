const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const validate = require('./validation/auth');

const db = require('../db/db');
const authHelper = require('../helpers/auth');

router.post('/register', validate.register, (req, res) => {
	const { username, password } = req.body;

	bcrypt.hash(password, 10, (err, hash) => {
		let sql = `INSERT INTO users (username, password) VALUES (${mysql.escape(username)}, "${hash}")`;
		db.query(sql, (err, result) => {
			if (err) {
				res.status(400).json({
					msg: 'Username already exists!'
				});
				return;
			}
			res.json({
				msg: `User ${username} created`
			});
		});
	});
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	
	const sql = `SELECT * FROM users WHERE username=${mysql.escape(username)}`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length === 0) {
			res.status(401).json({
				msg: 'Invalid username or password!'
			});
			return;
		}

		const user = result[0];
		hash = user.password;

		bcrypt.compare(password, hash, (err, result) => {
			if (result) {
				jwt.sign({ id: user.id, username: user.username }, authHelper.secret, (err, token) => {
					res.json({
						token,
						user: { id: user.id, username: user.username },
						msg: 'Successfully logged in!'
					});
				});
			} else {
				res.status(401).json({
					msg: 'Invalid username or password!'
				});
			} 
		})
	});
})

router.get('/verify', authHelper.verifyToken, (req, res) => {
	res.json({ msg: 'Successfully verified!', user: req.user })
})

module.exports = router;