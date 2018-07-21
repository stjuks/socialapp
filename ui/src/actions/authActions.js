import axios from 'axios';

import history from '../helpers/history';

export const login = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'LOGIN_START' });

            const req = await axios.post('/auth/login', data);
            const token = req.data.token;

            localStorage.setItem('social_token', token);

            dispatch({ type: 'LOGIN_SUCCESS', payload: req.data.user });
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.msg });
        }
    }
};

export const register = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'REGISTER_START' });

            await axios.post('/auth/register', data);

            history.push('/login');

            dispatch({ type: 'REGISTER_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'REGISTER_ERROR', payload: err.response.data.msg });
        }
    }
};

export const authRequest = (data) => {
    const token = localStorage.getItem('social_token');
    return {
        ...data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
};
