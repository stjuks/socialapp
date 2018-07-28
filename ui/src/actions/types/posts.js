export const FETCH_FOLLOWING_POSTS = {
    START: { type: 'FETCH_FOLLOWING_POSTS_START' },
    SUCCESS: (payload) => ({ type: 'FETCH_FOLLOWING_POSTS_SUCCESS', payload }),
    ERROR: (payload) => ({ type: 'FETCH_FOLLOWING_POSTS_ERROR', payload })
};
