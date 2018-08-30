const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const validate = require('./validation/auth');

const db = require('../db');
const { auth } = require('../db/queries');
const authHelper = require('../helpers/auth');

router.post('/register', validate.register, (req, res) => {
	const { username, password, email } = req.body;

	bcrypt.hash(password, 10, (err, hash) => {

		let sql = auth.register(username, hash, email);

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
	
	const sql = auth.login(username);

	db.query(sql, (err, result) => {
		if (err) throw err;
		if (result.rows.length === 0) {
			res.status(401).json({
				msg: 'Invalid username or password!'
			});
			return;
		}

		const user = result.rows[0];
		const hash = user.password;

		bcrypt.compare(password, hash, (err, result) => {
			if (result) {
				jwt.sign({ user_id: user.user_id, username: user.username }, authHelper.secret, (err, token) => {
					res.json({
						token,
						user: { user_id: user.user_id, username: user.username },
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
});

router.get('/verify', authHelper.verifyToken, (req, res) => {
	res.json({ msg: 'Successfully verified!', user: req.user })
});

module.exports = router;