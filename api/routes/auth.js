const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const validate = require('./validation/auth');

const db = require('../db');
const { Auth } = require('../db/queries');
const { authHelper } = require('../helpers');

router.post('/register', validate.register, (req, res) => {
    const { username, password, email } = req.body;

    let sql = Auth.register(username, email, password);

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(400).json({
                msg: 'Username or email already exists!'
            });
        }
        res.end();
    });
});

router.post('/login', validate.login, (req, res) => {
    const { username, password } = req.body;
    
    const sql = Auth.login(username, password);

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.rows.length === 0) {
            return res.status(401).json({
                msg: 'Invalid username or password!'
            });
        }

        const user = result.rows[0];

        jwt.sign({ 
            user_id: user.user_id, 
            username: user.username 
        }, process.env.JWT_SECRET, (err, token) => {
            res.json({
                token,
                user: { 
                    user_id: user.user_id, 
                    username: user.username 
                }
            });
        });
    });
});

router.get('/verify', authHelper.verifyToken, (req, res) => {
    res.json({ user: req.user })
});

module.exports = router;