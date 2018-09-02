import API from '../api';

import {
    SEARCH_USERS,
    FETCH_SELF_FOLLOWING,
    FETCH_USER_PROFILE,
    FOLLOW_USER
} from './types/user';

export const searchUsers = (query) => {
    return async (dispatch) => {
        try {
            dispatch(SEARCH_USERS.START);
            const { data } = await API.searchUsers(query);

            dispatch(SEARCH_USERS.SUCCESS(data));
        } catch (err) {
            dispatch(SEARCH_USERS.ERROR);
        }
    }
};

export const getSelfFollowing = () => {
    return async (dispatch, getState) => {
        try {
            const self = getState().user.self;

            dispatch(FETCH_SELF_FOLLOWING.START);
            const { data } = await API.getSelfFollowing(self.userId);

            dispatch(FETCH_SELF_FOLLOWING.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_SELF_FOLLOWING.ERROR);
        }
    }
};

export const getUserProfile = (username) => {
    return async (dispatch) => {
        try {
            dispatch(FETCH_USER_PROFILE.START);
            const { data } = await API.getUserProfile(username);
            console.log(data);
            dispatch(FETCH_USER_PROFILE.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_USER_PROFILE.ERROR);
        }
    }
};

export const handleFollow = (userId, isFollowing) => {
    return async (dispatch, getState) => {
        try {
            let profile = Object.assign({}, getState().user.activeProfile);
            profile.is_watcher_following = isFollowing ? 0 : 1;

            dispatch(FOLLOW_USER.START);
            await API.handleFollow(userId, isFollowing);
        
            dispatch(FOLLOW_USER.SUCCESS(profile));
        } catch (err) {
            dispatch(FOLLOW_USER.ERROR);
        }
    }
};
