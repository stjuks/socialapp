module.exports = {
    follow: (userId, followingId) => ({
        text: `
            INSERT INTO followers (follower_id, following_id) 
            VALUES ($1, $2);
        `, values: [userId, followingId]
    }),
    unfollow: (userId, followingId) => ({
        text: `
            DELETE FROM followers 
            WHERE follower_id=$1 AND following_id=$2;
        `, values: [userId, followingId]
    }),
    getFollowers: userId => ({
        text: `
            SELECT user_id, username FROM users WHERE user_id IN 
            (SELECT follower_id FROM followers WHERE following_id=$1);
        `, values: [userId]
    }),
    getFollowing: userId => ({
        text: `
            SELECT user_id, username FROM users WHERE user_id IN 
            (SELECT following_id FROM followers WHERE follower_id=$1);
        `, values: [userId]
    }),
    getProfile: (selfId, userId) => ({
        text: `
            SELECT user_id, username, avatar,
            EXISTS (
                SELECT 1 FROM followers 
                WHERE follower_id=$1 
                AND following_id=$2
            ) AS is_watcher_following,
            COUNT(*) FILTER (WHERE follower_id=users.user_id) AS following_count,
            COUNT(*) FILTER (WHERE following_id=users.user_id) AS follower_count
            FROM (
                users LEFT JOIN followers 
                ON users.user_id=followers.follower_id 
                OR users.user_id=followers.following_id
            ) WHERE user_id=$2
            GROUP BY user_id;
        `, values: [selfId, userId]
    }),
    search: query => ({
        text: `
            SELECT username, user_id FROM users 
            WHERE username LIKE %$1%
            ORDER BY username LIMIT 20;
        `, values: [query]
    })
};