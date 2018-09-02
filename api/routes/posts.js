const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const config = require('../config');
const { authHelper, fileHelper } = require('../helpers');
const db = require('../db');
const { Posts } = require('../db/queries');

const upload = config.fileUpload;

router.post('/create', authHelper.verifyToken, upload.single('image'), 
    fileHelper.uploadImage('uploads/posts'),
    (req, res) => {
        const { caption } = req.body;
        const { user, file } = req;
        
        const sql = Posts.create(user.userId, caption, file.filename);
        
        db.query(sql, (err, result) => {
            if (err) res.status(400).json({ msg: 'Error creating post!' });
            res.end();
        })
});

router.get('/image/:imageName', (req, res) => {
    const { imageName } = req.params;
    
    const pathName = path.join(__dirname, '/../uploads/posts', imageName);
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

    const sql = Posts.get(userId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    })
});

router.get('/following', authHelper.verifyToken, (req, res) => {
    const { user } = req;

    const sql = Posts.getFollowing(user.userId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.get('/like', authHelper.verifyToken, (req, res) => {
    const { user } = req;
    const { postId } = req.query;

    let sql = Posts.like(user.userId, postId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

router.get('/dislike', authHelper.verifyToken, (req, res) => {
    const { user } = req;
    const { postId } = req.query;

    let sql = Posts.dislike(user.userId, postId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    })
});

router.post('/comment', authHelper.verifyToken, (req, res) => {
    const { user } = req;
    const { postId, content } = req.body;

    let sql = Posts.comment(postId, user.userId, content);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

router.post('/comment/reply', authHelper.verifyToken, (req, res) => {
    const { user } = req;
    const { postId, content, parentId } = req.body;
    
    let sql = Posts.reply(postId, user.userId, content, parentId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    })
});

router.get('/comments', (req, res) => {
    const { postId } = req.query;

    const sql = Posts.getComments(postId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.get('/comments/replies', (req, res) => {
    const { parentId } = req.query;

    const sql = Posts.getReplies(parentId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

module.exports = router;