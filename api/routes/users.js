const express = require('express');
const router = express.Router();

const validate = require('./validation/users');
const { authHelper } = require('../helpers');
const db = require('../db');
const { Users } = require('../db/queries');

router.get('/search', validate.search, (req, res) => {
    const { query } = req.query;

    const sql = Users.search(query);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    })
});

router.get('/get/:username', authHelper.verifyToken, validate.getUser, (req, res) => {
    const { username } = req.params;
    const { user } = req;

    let sql = Users.getProfile(user.user_id, username);

    db.query(sql, (err, result) => {
        if (err) throw err;

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'No user found!' });
        }

        const user = result.rows[0];
        res.json(user);
    })
});

module.exports = router;