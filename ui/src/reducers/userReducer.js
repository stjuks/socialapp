import {
    FETCH_USER_PROFILE,
    SEARCH_USERS,
    FOLLOW_USER,
    LOGIN,
    FETCH_SELF_FOLLOWING,
    SET_ACTIVE_PROFILE
} from 'actions/types';
import { UNFOLLOW_USER } from '../actions/types';

const INITIAL_STATE = {
    self: {
        username: '',
        user_id: 0,
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
                    user_id: action.payload.user_id,
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
        case FOLLOW_USER().type: {
            return {
                ...state,
                activeProfile: {
                    ...state.activeProfile,
                    follower_count: state.activeProfile.follower_count + 1,
                    is_watcher_following: true
                },
                self: {
                    ...state.self,
                    following: [
                        ...state.self.following,
                        action.payload
                    ]
                }
            }
        }
        case UNFOLLOW_USER().type: {
            return {
                ...state,
                activeProfile: {
                    ...state.activeProfile,
                    is_watcher_following: false,
                    follower_count: state.activeProfile.follower_count - 1,
                },
                self: {
                    ...state.self,
                    following: [
                        ...state.self.following.slice(
                            0, state.self.following.findIndex(user => user.user_id === action.payload)
                        ),
                        ...state.self.following.slice(
                            state.self.following.findIndex(user => user.user_id === action.payload) + 1
                        )
                    ]
                }
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