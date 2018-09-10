import API from 'api';

import {
    SEARCH_USERS,
    FETCH_SELF_FOLLOWING,
    FETCH_USER_PROFILE,
    FOLLOW_USER,
    SET_ACTIVE_PROFILE
} from './types';

export const searchUsers = query => {
    return async dispatch => {
        try {
            dispatch(SEARCH_USERS.START);
            const { data } = await API.users.search(query);

            dispatch(SEARCH_USERS.SUCCESS(data));
        } catch (err) {
            dispatch(SEARCH_USERS.ERROR);
        }
    }
};

export const getFollowing = userId => {
    return async dispatch => {
        try {
            dispatch(FETCH_SELF_FOLLOWING.START);
            const { data } = await API.users.following(userId);

            dispatch(FETCH_SELF_FOLLOWING.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_SELF_FOLLOWING.ERROR);
        }
    }
};

export const getUserProfile = username => {
    return async dispatch => {
        try {
            dispatch(FETCH_USER_PROFILE.START);
            const { data } = await API.users.profile(username);
            
            dispatch(FETCH_USER_PROFILE.SUCCESS(data, username));
            dispatch(SET_ACTIVE_PROFILE(data));
        } catch (err) {
            dispatch(FETCH_USER_PROFILE.ERROR);
        }
    }
};

export const follow = userId => {
    return async (dispatch, getState) => {
        try {
            await API.users.follow(userId);
            let profile = Object.assign({}, getState().user.activeProfile);
            profile.is_watcher_following = true;
            dispatch(FETCH_USER_PROFILE.SUCCESS(profile, profile.username));
            dispatch(SET_ACTIVE_PROFILE(profile));
        } catch (err) {

        }
    }
}

export const unfollow = userId => {
    return async (dispatch, getState) => {
        try {
            await API.users.unfollow(userId);
            let profile = Object.assign({}, getState().user.activeProfile);
            profile.is_watcher_following = false;
            dispatch(FETCH_USER_PROFILE.SUCCESS(profile, profile.username));
            dispatch(SET_ACTIVE_PROFILE(profile));
        } catch (err) {

        }
    }
}
