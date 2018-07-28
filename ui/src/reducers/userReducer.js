const INITIAL_STATE = {
    self: {
        username: null,
        userId: null,
        following: []
    },
    userSearchResults: [],
    activeProfile: {
        id: null,
        username: null,
        posts: [],
        follower_count: null,
        following_count: null
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
                    userId: action.payload.id
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