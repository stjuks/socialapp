module.exports = {
    follow: (followerId, followingId) => ({
        text: `
            SELECT f_follow_user($1, $2);
        `, values: [followerId, followingId]
    }),
    unfollow: (followerId, followingId) => ({
        text: `
            SELECT f_unfollow_user($1, $2);
        `, values: [followerId, followingId]
    }),
    getFollowers: userId => ({
        text: `
            SELECT * FROM followers_list WHERE self_id = $1;
        `, values: [userId]
    }),
    getFollowing: userId => ({
        text: `
            SELECT * FROM following_list WHERE self_id = $1;
        `, values: [userId]
    }),
    getProfile: (selfId, username) => ({
        text: `
            SELECT * FROM f_get_user_profile($1, $2);
        `, values: [selfId, username]
    }),
    search: query => ({
        text: `
            SELECT * FROM user_search WHERE username LIKE LOWER($1);
        `, values: [`%${query}%`]
    })
};