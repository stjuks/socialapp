const express = require('express');
const router = express.Router();

const validate = require('./validation/follow');
const { authHelper } = require('../helpers');
const db = require('../db');
const { Users } = require('../db/queries');

router.get('/follow/:followingId', authHelper.verifyToken, validate.follow, (req, res) => {
    const { followingId } = req.params;
    const { user } = req;

    const sql = Users.follow(user.user_id, followingId);

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(400).json({ 
                msg: 'User does not exist or you already follow this user!' 
            });
        }
        res.end();
    });

});

router.get('/unfollow/:followingId', authHelper.verifyToken, validate.unfollow, (req, res) => {
    const { followingId } = req.params;
    const { user } = req;

    const sql = Users.unfollow(user.user_id, followingId);

    db.query(sql, (err, result) => {
        if (err || result.affectedRows === 0) {
            return res.status(400).json({ 
                msg: 'User does not exist or you are not following this user!' 
            });
        }
        res.end();
    })

});

router.get('/followers/:userId', validate.getFollowers, (req, res) => {
    const { userId } = req.params;

    const sql = Users.getFollowers(userId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    })
});

router.get('/following/:userId', validate.getFollowing, (req, res) => {
    const { userId } = req.params;

    const sql = Users.getFollowing(userId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    })
});

module.exports = router;