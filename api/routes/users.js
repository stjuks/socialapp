const express = require('express');
const router = express.Router();

const { authHelper } = require('../helpers');
const db = require('../db');
const { Users } = require('../db/queries');

router.get('/search', (req, res) => {
    const { query } = req.query;

    if (query.length === 0) {
        return res.json([]);
    }

    const sql = Users.search(query);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    })
});

router.get('/get/:username', authHelper.verifyToken, (req, res) => {
    const { username } = req.params;
    const { user } = req;

    let sql = Users.getProfile(user.userId, username);

    db.query(sql, (err, result) => {
        if (err) throw err;

        if (result.rows.length === 0) return res.status(404).json({ msg: 'No user found!' });

        const user = result.rows[0];
        res.json(user);
    })
});

module.exports = router;