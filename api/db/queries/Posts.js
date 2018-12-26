module.exports = {
    create: (posterId, imageName, caption) => ({
        text: `
            SELECT f_create_post($1, $2, $3);
        `, values: [posterId, imageName, caption]
    }),
    getUserPosts: username => ({
        text: `
            SELECT * FROM all_posts WHERE poster_username = $1;
        `, values: [username] 
    }),
    getFollowing: userId => ({
        text: `
            SELECT * FROM feed_posts WHERE follower_id = $1;
        `, values: [userId] 
    }),
    like: (likerId, postId) => ({
        text: `
            SELECT f_like_post($1, $2);
        `, values: [likerId, postId] 
    }),
    unlike: (likerId, postId) => ({
        text: `
            SELECT f_unlike_post($1, $2);
        `, values: [likerId, postId]
    }),
    comment: (postId, userId, content) => ({
        text: `
            SELECT f_comment_on_post($1, $2, $3, null);
        `, values: [postId, userId, content]
    }),
    reply: (postId, userId, content, parentId) => ({
        text: `
            SELECT f_comment_on_post($1, $2, $3, $4);
        `, values: [postId, userId, content, parentId]
    }),
    getComments: postId => ({
        text: `
            SELECT * FROM all_comments WHERE post_id = $1 AND parent_id IS NULL;
        `, values: [postId]
    }),
    getReplies: parentId => ({
        text: `
            SELECT * FROM all_comments WHERE parent_id = $1;
        `, values: [parentId]
    })
};
