const fetchAction = name => ({
    START: { type: `${name}_START` },
    SUCCESS: (payload, key) => ({ type: `${name}_SUCCESS`, payload, key }),
    ERROR: payload => ({ type: `${name}_ERROR`, payload })
});

const modalAction = name => ({
    OPEN: { type: `${name}_OPEN` },
    CLOSE: { type: `${name}_CLOSE` }
})

export const RESET_STATE = { type: 'RESET_STATE' };

// auth
export const LOGIN = fetchAction('LOGIN');
export const REGISTER = fetchAction('REGISTER');

// modal
export const UPLOAD_MODAL = modalAction('UPLOAD_MODAL');
export const SETTINGS = modalAction('SETTINGS');
export const POST_MODAL = modalAction('POST_MODAL');

// posts
export const FETCH_FEED = fetchAction('FETCH_FEED');
export const FETCH_USER_POSTS = fetchAction('FETCH_USER_POSTS');
export const FETCH_COMMENTS = fetchAction('FETCH_COMMENTS');
export const FETCH_REPLIES = fetchAction('FETCH_REPLIES');
export const CREATE_POST = fetchAction('CREATE_POST');
export const LIKE_POST = fetchAction('LIKE_POST');
export const UNLIKE_POST = fetchAction('UNLIKE_POST');
export const COMMENT = fetchAction('COMMENT');
export const REPLY = fetchAction('REPLY');
export const SET_ACTIVE_POST = payload => ({ type: 'SET_ACTIVE_POST', payload });

// users
export const SEARCH_USERS = fetchAction('SEARCH_USERS');
export const FETCH_SELF_FOLLOWING = fetchAction('FETCH_SELF_FOLLOWING');
export const FETCH_USER_PROFILE = fetchAction('FETCH_USER_PROFILE');
// export const FOLLOW_USER = fetchAction('FOLLOW_USER');
// export const UNFOLLOW_USER = fetchAction('UNFOLLOW_USER');
export const FOLLOW_USER = payload => ({ type: 'FOLLOW_USER', payload });
export const UNFOLLOW_USER = payload => ({ type: 'UNFOLLOW_USER', payload });
export const SET_ACTIVE_PROFILE = payload => ({ type: 'SET_ACTIVE_PROFILE', payload });
