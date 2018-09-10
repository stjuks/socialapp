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
    getProfile: (selfId, username) => ({
        text: `
            SELECT user_id, username, avatar,
                EXISTS (
                    SELECT 1 FROM followers 
                    WHERE follower_id=$1
                    AND following_id=users.user_id
                ) is_watcher_following,
                (SELECT COUNT(*) FILTER (WHERE follower_id=users.user_id) FROM followers) following_count,
                (SELECT COUNT(*) FILTER (WHERE following_id=users.user_id) FROM followers) follower_count,
                (SELECT COUNT(*) FILTER (WHERE user_id=users.user_id) FROM posts) post_count
            FROM users WHERE users.username=$2;
        `, values: [selfId, username]
    }),
    search: query => ({
        text: `
            SELECT username, user_id FROM users 
            WHERE username LIKE LOWER($1)
            ORDER BY username LIMIT 20;
        `, values: [`%${query}%`]
    })
};