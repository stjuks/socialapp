export const SEARCH_USERS = {
    START: { type: 'SEARCH_USERS_START' },
    SUCCESS: (payload) => ({ type: 'SEARCH_USERS_SUCCESS', payload }),
    ERROR: { type: 'SEARCH_USERS_ERROR' }
};

export const FETCH_SELF_FOLLOWING = {
    START: { type: 'FETCH_SELF_FOLLOWING_START' },
    SUCCESS: (payload) => ({ type: 'FETCH_SELF_FOLLOWING_SUCCESS', payload }),
    ERROR: { type: 'FETCH_SELF_FOLLOWING_ERROR' }
};

export const FETCH_USER_PROFILE = {
    START: { type: 'FETCH_USER_PROFILE_START' },
    SUCCESS: (payload) => ({ type: 'FETCH_USER_PROFILE_SUCCESS', payload }),
    ERROR: { type: 'FETCH_USER_PROFILE_ERROR' }
};

export const FOLLOW_USER = {
    START: { type: 'FOLLOW_USER_START' },
    SUCCESS: (payload) => ({ type: 'FOLLOW_USER_SUCCESS', payload }),
    ERROR: { type: 'FOLLOW_USER_ERROR' }
};
