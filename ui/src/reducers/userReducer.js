import {
    FETCH_USER_PROFILE,
    SEARCH_USERS,
    FOLLOW_USER,
    LOGIN,
    FETCH_SELF_FOLLOWING,
    SET_ACTIVE_PROFILE
} from 'actions/types';

const INITIAL_STATE = {
    self: {
        username: '',
        userId: 0,
        following: [],
        isLoggedIn: false
    },
    userSearchResults: [],
    profiles: {},
    activeProfile: {}
};

export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN.SUCCESS().type: {
            return {
                ...state,
                self: {
                    ...state.self,
                    username: action.payload.username,
                    userId: action.payload.userId,
                    isLoggedIn: true
                }
            }
        }
        case FETCH_SELF_FOLLOWING.SUCCESS().type: {
            return {
                ...state,
                self: {
                    ...state.self,
                    following: action.payload
                }
            }
        }
        case FETCH_USER_PROFILE.SUCCESS().type: {
            return {
                ...state,
                profiles: {
                    ...state.profiles,
                    [action.key]: action.payload
                }
            }
        }
        case SEARCH_USERS.SUCCESS().type: {
            return {
                ...state,
                userSearchResults: action.payload
            }
        }
        case FOLLOW_USER.SUCCESS.type: {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case SET_ACTIVE_PROFILE().type: {
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