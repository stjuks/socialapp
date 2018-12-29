import {
    FETCH_FEED,
    FETCH_USER_POSTS,
    FETCH_COMMENTS,
    FETCH_REPLIES,
    CREATE_POST,
    LIKE_POST,
    UNLIKE_POST,
    COMMENT,
    REPLY,
    RESET_STATE,
    SET_ACTIVE_POST
} from 'actions/types';

const INITIAL_STATE = {
    feed: [],
    activePost: {},
    userPosts: {}
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_FEED.SUCCESS().type: {
            return {
                ...state,
                feed: action.payload
            }
        }
        case FETCH_USER_POSTS.SUCCESS().type: {
            return {
                ...state,
                userPosts: {
                    ...state.userPosts, 
                    [action.key]: action.payload
                }
            }
        }
        case FETCH_COMMENTS.SUCCESS().type: {
            return {
                ...state
            }
        }
        case FETCH_REPLIES.SUCCESS().type: {
            return {
                ...state
            }
        }
        case SET_ACTIVE_POST().type: {
            return {
                ...state, activePost: action.payload
            }
        }
        case LIKE_POST.SUCCESS().type: {
            const { postId, username } = action.payload;
            let feedPosts = Object.assign([], state.feed);
            let userPosts = Object.assign({}, state.userPosts);
            let activePost = Object.assign({}, state.activePost);

            const data = handleLike({ 
                isLike: true, postId, username, feedPosts, userPosts, activePost
            });
            
            return {
                ...state, ...data
            }
        }
        case UNLIKE_POST.SUCCESS().type: {
            const { postId, username } = action.payload;
            let feedPosts = Object.assign([], state.feed);
            let userPosts = Object.assign({}, state.userPosts);
            let activePost = Object.assign({}, state.activePost);

            const data = handleLike({ 
                isLike: false, postId, username, feedPosts, userPosts, activePost
            });

            return {
                ...state, ...data
            }
        }
        case RESET_STATE.type: {
            return INITIAL_STATE;
        }
        default: {
            return state;
        }
    }

}

const handleLike = data => {
    let { feedPosts, postId, isLike, userPosts, username, activePost } = data;
    
    feedPosts = feedPosts.map(post => {
        if (post.post_id === postId) {
            isLike ? post.like_count++ : post.like_count--;
            post.has_watcher_liked = isLike;
        }
        return post;
    });

    if (userPosts[username]) {
        userPosts[username] = userPosts[username].map(post => {
            if (post.post_id === postId) {
                isLike ? post.like_count++ : post.like_count--;
                post.has_watcher_liked = isLike;
            }
            return post;
        })
    }

    if (activePost.post_id == postId) {
        activePost.has_watcher_liked = isLike;
        isLike ? activePost.like_count++ : activePost.like_count--;
    }

    return {
        feed: feedPosts,
        userPosts,
        activePost
    }
}