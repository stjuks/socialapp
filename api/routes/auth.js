const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const validate = require('./validation/auth');

const db = require('../db');
const { Auth } = require('../db/queries');
const { authHelper } = require('../helpers');

router.post('/register', validate.register, (req, res) => {
    const { username, password, email } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {

        let sql = Auth.register(username, hash, email);

        db.query(sql, (err, result) => {
            if (err) {
                return res.status(400).json({
                    msg: 'Username already exists!'
                });
            }
            res.end();
        });
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const sql = Auth.login(username);

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.rows.length === 0) {
            return res.status(401).json({
                msg: 'Invalid username or password!'
            });
        }

        const user = result.rows[0];
        const hash = user.password;

        bcrypt.compare(password, hash, (err, result) => {
            if (result) {
                jwt.sign({ userId: user.user_id, username: user.username }, process.env.JWT_SECRET, (err, token) => {
                    res.json({
                        token,
                        user: { userId: user.user_id, username: user.username }
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
    res.json({ user: req.user })
});

module.exports = router;