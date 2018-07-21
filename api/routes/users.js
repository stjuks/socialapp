const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const authHelper = require('../helpers/auth');
const db = require('../db/db');

// ?query=[string]
router.get('/search', (req, res) => {
	const { query } = req.query

	const sql = `SELECT username, id FROM users 
		WHERE username LIKE ${mysql.escape(query + '%')} 
		ORDER BY username LIMIT 20`;

	db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	})
});

module.exports = router;