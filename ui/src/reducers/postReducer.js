const INITIAL_STATE = {
    followingPosts: []
};

export default function reducer(state=INITIAL_STATE, action) {

    switch (action.type) {
        case 'FETCH_FOLLOWING_POSTS_SUCCESS': {
            return {
                ...state,
                followingPosts: action.payload
            }
        }
        case 'RESET_STATE': {
            return INITIAL_STATE;
        }
        default: {
            break;
        }
    }

    return state;
}