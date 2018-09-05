module.exports = {
    create: (userId, caption, image) => ({
        text: `
            INSERT INTO posts (user_id, caption, image) 
            VALUES ($1, $2, $3) RETURNING *;
        `, values: [userId, caption, image]
    }),
    get: userId => ({
        text: `
            SELECT jsonb_agg(json) result
            FROM (
                SELECT 
                    jsonb_build_object(
                        'post_id', post_id, 
                        'user_id', user_id,
                        'timestamp', timestamp,
                        'caption', caption,
                        'image', image,
                        'like_count', like_count,
                        'comments', jsonb_agg(c)
                    ) json
                FROM (
                    SELECT
                        p.*,
                        (SELECT COUNT(*) FILTER (WHERE p.post_id=likes.post_id) FROM likes) AS like_count,
                        jsonb_build_object(
                            'comment_id', c.comment_id,
                            'content', c.content,
                            'poster_id', c.poster_id,
                            'parent_id', c.parent_id,
                            'timestamp', c.timestamp
                        ) c
                    FROM posts p
                    LEFT JOIN LATERAL (
                        SELECT * FROM comments WHERE post_id=p.post_id ORDER BY timestamp DESC LIMIT 15
                    ) c ON true
                    WHERE p.user_id=$1
                ) p
                GROUP BY post_id, user_id, timestamp, caption, image, like_count
            ) p;
        `, values: [userId] 
    }),
    getFollowing: userId => ({
        text: `
            SELECT jsonb_agg(json) result
            FROM (
                SELECT 
                    jsonb_build_object(
                        'post_id', post_id, 
                        'user_id', user_id,
                        'username', username,
                        'timestamp', timestamp,
                        'caption', caption,
                        'image', image,
                        'like_count', like_count,
                        'comments', jsonb_agg(c)
                    ) json
                FROM (
                    SELECT
                        p.*,
                        (SELECT username FROM users WHERE user_id=p.user_id),
                        (SELECT COUNT(*) FILTER (WHERE p.post_id=likes.post_id) FROM likes) like_count,
                        jsonb_build_object(
                            'comment_id', c.comment_id,
                            'content', c.content,
                            'poster_id', c.poster_id,
                            'parent_id', c.parent_id,
                            'timestamp', c.timestamp
                        ) c
                    FROM (posts p
                    LEFT JOIN LATERAL (
                        SELECT * FROM comments WHERE post_id=p.post_id ORDER BY timestamp DESC LIMIT 15
                    ) c ON true)
                    LEFT JOIN followers f ON p.user_id=f.following_id
                    WHERE f.follower_id=$1
                ) p
                GROUP BY post_id, user_id, username, timestamp, caption, image, like_count
            ) p;
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