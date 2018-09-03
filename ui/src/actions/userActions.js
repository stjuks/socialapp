import API from 'api';

import {
    SEARCH_USERS,
    FETCH_SELF_FOLLOWING,
    FETCH_USER_PROFILE,
    FOLLOW_USER
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

export const getUserProfile = userId => {
    return async dispatch => {
        try {
            dispatch(FETCH_USER_PROFILE.START);
            const { data } = await API.users.profile(userId);
            
            dispatch(FETCH_USER_PROFILE.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_USER_PROFILE.ERROR);
        }
    }
};

export const follow = userId => {
    return async dispatch => {
        try {
            await API.users.follow(userId);
        } catch (err) {

        }
    }
}

export const unfollow = userId => {
    return async dispatch => {
        try {
            await API.users.unfollow(userId);
        } catch (err) {

        }
    }
}
