const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const validate = require('./validation/posts');
const config = require('../config');
const { authHelper, fileHelper } = require('../helpers');
const db = require('../db');
const { Posts } = require('../db/queries');

const upload = config.fileUpload;

router.post('/create', authHelper.verifyToken, upload.single('image'), 
    fileHelper.uploadImage('uploads/posts'), validate.createPost,
    (req, res) => {
        const { caption } = req.body;
        const { user, file } = req;
        
        const sql = Posts.create(user.user_id, file.filename, caption);
        
        db.query(sql, (err, result) => {
            if (err) res.status(400).json({ msg: 'Error creating post!' });
            res.json(result.rows);
        })
});

router.get('/image/:imageName', (req, res) => {
    const { imageName } = req.params;
    let img = null;
    
    const pathName = path.join(__dirname, '/../uploads/posts', imageName);
    
    try {
        img = fs.readFileSync(pathName);
    } catch (err) {
        console.log(err);
    }

    if (img) {
        res.set({ 'Content-Type': 'image/png' });
        res.end(img, 'binary');
    } else {
        res.status(404).json({ msg: 'No image found!' });
    }
});

router.get('/get/:username', authHelper.verifyToken, validate.getPosts, (req, res) => {
    const { username } = req.params;
    const { user } = req;

    const sql = Posts.getUserPosts(user.user_id, username);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.get('/following', authHelper.verifyToken, validate.getFollowingPosts, (req, res) => {
    const { user } = req;

    const sql = Posts.getFollowing(user.user_id);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.post('/like', authHelper.verifyToken, validate.like, (req, res) => {
    const { user } = req;
    const { postId } = req.body;

    console.log(user);

    let sql = Posts.like(user.user_id, postId);

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Error liking post!' });
        res.end();
    });
});

router.delete('/like', authHelper.verifyToken, validate.unlike, (req, res) => {
    const { user } = req;
    const { postId } = req.query;

    let sql = Posts.unlike(user.user_id, postId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    })
});

router.post('/comment', authHelper.verifyToken, validate.comment, (req, res) => {
    const { user } = req;
    const { postId, content } = req.body;

    let sql = Posts.comment(postId, user.user_id, content);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

router.post('/comment/reply', authHelper.verifyToken, validate.reply, (req, res) => {
    const { user } = req;
    const { postId, content, parentId } = req.body;
    
    let sql = Posts.reply(postId, user.user_id, content, parentId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    })
});

router.get('/comments', validate.getComments, (req, res) => {
    const { postId } = req.query;

    const sql = Posts.getComments(postId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.get('/comments/replies', validate.getReplies, (req, res) => {
    const { parentId } = req.query;

    const sql = Posts.getReplies(parentId);

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

module.exports = router;