import {
    FETCH_FEED,
    FETCH_USER_POSTS,
    FETCH_COMMENTS,
    FETCH_REPLIES,
    CREATE_POST,
    LIKE_POST,
    DISLIKE_POST,
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
        case RESET_STATE.type: {
            return INITIAL_STATE;
        }
        default: {
            return state;
        }
    }

}