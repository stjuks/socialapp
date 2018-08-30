const { escape } = require('mysql');

const posts = {
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
        DELETE FROM likes WHERE user_id=${escape(userId)} AND post_id=${escape(postId)}
    `
};

const users = {
    follow: (userId, followingId) => `
        INSERT INTO followers (follower_id, following_id) 
        VALUES (${escape(userId)}, ${escape(followingId)});
    `,
    unfollow: (userId, followingId) => `
        DELETE FROM followers 
        WHERE follower_id=${escape(userId)} AND following_id=${escape(followingId)};
    `,
    getFollowers: userId => `
        SELECT user_id, username FROM users WHERE user_id IN 
        (SELECT follower_id FROM followers WHERE following_id=${escape(userId)});
    `,
    getFollowing: userId => `
        SELECT user_id, username FROM users WHERE user_id IN 
        (SELECT following_id FROM followers WHERE follower_id=${escape(userId)});
    `,
    getProfile: (selfId, userId) => `
        SELECT user_id, username, avatar,
        EXISTS(
            SELECT 1 FROM followers 
            WHERE follower_id=${escape(selfId)} 
            AND following_id=${escape(userId)}
        ) AS is_watcher_following,
        COUNT(*) FILTER (WHERE follower_id=users.user_id) AS following_count,
        COUNT(*) FILTER (WHERE following_id=users.user_id) AS follower_count
        FROM (users LEFT JOIN followers ON users.user_id=followers.follower_id OR users.user_id=followers.following_id) 
        WHERE user_id=${escape(userId)}
        GROUP BY user_id;
    `,
    search: query => `
        SELECT username, user_id FROM users 
        WHERE username LIKE ${escape(`%${query}%`)}
        ORDER BY username LIMIT 20;
    `
};

const auth = {
    login: username => `
        SELECT * FROM users WHERE username=${escape(username)};
    `,
    register: (username, password, email) => `
        INSERT INTO users (username, password, email) 
        VALUES (${escape(username)}, ${escape(password)}, ${escape(email)});
    `
};

module.exports = {
    posts,
    users,
    auth
};