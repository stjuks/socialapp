module.exports = {
    create: (userId, caption, image) => ({
        text: `
            INSERT INTO posts (user_id, caption, image) 
            VALUES ($1, $2, $3) RETURNING *;
        `, values: [userId, caption, image]
    }),
    get: username => ({
        text: `
            SELECT p.*, u.username,
                (SELECT COUNT(*) FILTER (WHERE p.post_id=likes.post_id) FROM likes) like_count,
                (SELECT COUNT(*) FILTER (WHERE p.post_id=comments.post_id) FROM comments) comment_count
            FROM posts p JOIN users u ON p.user_id=u.user_id
            WHERE u.username=$1
            ORDER BY p.timestamp DESC;
        `, values: [username] 
    }),
    getFollowing: userId => ({
        text: `
            SELECT p.*, u.username,
                (SELECT COUNT(*) FILTER (WHERE p.post_id=likes.post_id) FROM likes) like_count,
                (SELECT COUNT(*) FILTER (WHERE p.post_id=comments.post_id) FROM comments) comment_count
            FROM (posts p JOIN users u ON p.user_id=u.user_id) LEFT JOIN followers f ON p.user_id=f.following_id
            WHERE f.follower_id=$1
            ORDER BY p.timestamp DESC;
        `, values: [userId] 
    }),
    like: (userId, postId) => ({
        text: `
            INSERT INTO likes (user_id, post_id) VALUES ($1, $2);
        `, values: [userId, postId] 
    }),
    dislike: (userId, postId) => ({
        text: `
            DELETE FROM likes WHERE user_id=$1 AND post_id=$2;
        `, values: [userId, postId]
    }),
    comment: (postId, userId, content) => ({
        text: `
            INSERT INTO comments (post_id, poster_id, content) 
            VALUES ($1, $2, $3) RETURNING *;
        `, values: [postId, userId, content]
    }),
    reply: (postId, userId, content, parentId) => ({
        text: `
            INSERT INTO comments (post_id, poster_id, content, parent_id) 
            VALUES ($1, $2, $3, $4) RETURNING *;
        `, values: [postId, userId, content, parentId]
    }),
    getComments: postId => ({
        text: `
            SELECT comments.*, users.avatar, users.username 
            FROM comments INNER JOIN users ON comments.poster_id=users.user_id
            WHERE comments.post_id=$1 AND parent_id IS NULL;
        `, values: [postId]
    }),
    getReplies: commentId => ({
        text: `
            SELECT comments.*, users.avatar, users.username
            FROM comments INNER JOIN users ON comments.poster_id=users.user_id
            WHERE comments.parent_id=$1;
        `, values: [commentId]
    })
};