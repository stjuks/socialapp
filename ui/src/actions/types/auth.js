export const LOGIN = {
    START: { type: 'LOGIN_START' },
    SUCCESS: (payload) => ({ type: 'LOGIN_SUCCESS', payload }),
    ERROR: (payload) => ({ type: 'LOGIN_ERROR', payload }),
};

export const REGISTER = {
    START: { type: 'REGISTER_START' },
    SUCCESS: { type: 'REGISTER_SUCCESS' },
    ERROR: (payload) => ({ type: 'REGISTER_ERROR', payload }),
};
