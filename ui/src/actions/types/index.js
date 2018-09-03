const fetchAction = name => ({
    START: { type: `${name}_START` },
    SUCCESS: payload => ({ type: `${name}_SUCCESS`, payload }),
    ERROR: payload => ({ type: `${name}_ERROR`, payload })
});

const voidAction = name => ({
    START: { type: `${name}_START` },
    SUCCESS: { type: `${name}_SUCCESS` },
    ERROR: payload => ({ type: `${name}_ERROR`, payload })
});

const modalAction = name => ({
    OPEN: { type: `${name}_OPEN` },
    CLOSE: { type: `${name}_CLOSE` }
})

export const RESET_STATE = { type: 'RESET_STATE' };

// auth
export const LOGIN = fetchAction('LOGIN');
export const REGISTER = voidAction('REGISTER');

// modal
export const UPLOAD = modalAction('UPLOAD');
export const SETTINGS = modalAction('SETTINGS');

// posts
export const FETCH_FOLLOWING_POSTS = fetchAction('FETCH_FOLLOWING_POSTS');
export const FETCH_POSTS = fetchAction('FETCH_POSTS');
export const FETCH_COMMENTS = fetchAction('FETCH_COMMENTS');
export const FETCH_REPLIES = fetchAction('FETCH_REPLIES');
export const CREATE_POST = voidAction('CREATE_POST');
export const LIKE_POST = voidAction('LIKE_POST');
export const DISLIKE_POST = voidAction('DISLIKE_POST');
export const COMMENT = voidAction('COMMENT');
export const REPLY = voidAction('REPLY');

// users
export const SEARCH_USERS = fetchAction('SEARCH_USERS');
export const FETCH_SELF_FOLLOWING = fetchAction('FETCH_SELF_FOLLOWING');
export const FETCH_USER_PROFILE = fetchAction('FETCH_USER_PROFILE');
export const FOLLOW_USER = voidAction('FOLLOW_USER');
