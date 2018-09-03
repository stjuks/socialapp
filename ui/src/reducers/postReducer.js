import {
    FETCH_FOLLOWING_POSTS,
    FETCH_POSTS,
    FETCH_COMMENTS,
    FETCH_REPLIES,
    CREATE_POST,
    LIKE_POST,
    DISLIKE_POST,
    COMMENT,
    REPLY,
    RESET_STATE
} from 'actions/types';

const INITIAL_STATE = {
    followingPosts: [],
    posts: {
        32: {
            image: 'asdasdasd.png',
            caption: 'lololol',
            timestamp: '10:02:29 05.05.2018',
            comments: [

            ]
        }
    }
};

export default reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_FOLLOWING_POSTS.SUCCESS().type: {
            return {
                ...state, followingPosts: action.payload
            }
        }
        case FETCH_POSTS.SUCCESS().type: {
            return {
                ...state
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
        case RESET_STATE.type: {
            return INITIAL_STATE;
        }
        default: {
            return state;
        }
    }

}