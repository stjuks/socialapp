const INITIAL_STATE = {
    self: {
        username: '',
        userId: 0,
        following: []
    },
    userSearchResults: [],
    activeProfile: {
        userId: 0,
        username: '',
        posts: [],
        follower_count: 0,
        following_count: 0,
        is_watcher_following: false
    }
};

export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                self: {
                    ...state.self,
                    username: action.payload.username,
                    userId: action.payload.userId
                }
            }
        }
        case 'FETCH_SELF_FOLLOWING_SUCCESS': {
            return {
                ...state,
                self: {
                    ...state.self,
                    following: action.payload
                }
            }
        }
        case 'FETCH_USER_PROFILE_SUCCESS': {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case 'SEARCH_USERS_SUCCESS': {
            return {
                ...state,
                userSearchResults: action.payload
            }
        }
        case 'FOLLOW_USER_SUCCESS': {
            return {
                ...state,
                activeProfile: action.payload
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