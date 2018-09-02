const { escape } = require('mysql');

module.exports = {
    create: (userId, caption, image) => `
        INSERT INTO posts (user_id, caption, image) 
        VALUES (${escape(userId)}, ${escape(caption)}, ${escape(image)});
    `,
    get: userId => `
        SELECT posts.*, Count(likes.post_id) AS like_count
		FROM (posts LEFT JOIN likes ON posts.post_id=likes.post_id) 
		WHERE posts.user_id=${escape(userId)}
		GROUP BY post_id;
    `,
    getFollowing: userId => `
        SELECT users.username, posts.*, Count(likes.post_id) AS like_count
        FROM ((posts LEFT JOIN likes ON posts.post_id=likes.post_id)
        LEFT JOIN users ON users.user_id=posts.user_id)
        WHERE posts.user_id IN
        (SELECT following_id FROM followers WHERE follower_id=${escape(userId)})
        GROUP BY (posts.post_id, users.username);
    `,
    like: (userId, postId) => `
        INSERT INTO likes (user_id, post_id) VALUES (${escape(userId)}, ${escape(postId)});
    `,
    dislike: (userId, postId) => `
        DELETE FROM likes WHERE user_id=${escape(userId)} AND post_id=${escape(postId)};
    `,
    comment: (postId, userId, content) => `
        INSERT INTO comments (post_id, poster_id, content) 
        VALUES (${escape(postId)}, ${escape(userId)}, ${escape(content)});
    `,
    reply: (postId, userId, content, parentId) => `
        INSERT INTO comments (post_id, poster_id, content, parent_id) 
        VALUES (${escape(postId)}, ${escape(userId)}, ${escape(content)}, ${escape(parentId)});
    `,
    getComments: postId => `
        SELECT comments.*, users.avatar, users.username 
        FROM comments INNER JOIN users ON comments.poster_id=users.user_id
        WHERE comments.post_id=${escape(postId)} AND parent_id IS NULL;
    `,
    getReplies: commentId => `
        SELECT comments.*, users.avatar, users.username
        FROM comments INNER JOIN users ON comments.poster_id=users.user_id
        WHERE comments.parent_id=${escape(commentId)};
    `
};