import history from 'helpers/history';

import { routes } from 'helpers/constants';

import { LOGIN, REGISTER, RESET_STATE } from './types';

import API from 'api';

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(LOGIN.START);

            const { data } = await API.auth.login(username, password);

            localStorage.setItem('social_token', data.token);

            dispatch(LOGIN.SUCCESS(data.user));

            return true;
        } catch (err) {
            dispatch(LOGIN.ERROR(err.response.data.msg || ''));
            return false;
        }
    }
};

export const register = (username, password, email) => {
    return async (dispatch) => {
        try {
            dispatch(REGISTER.START);

            await API.auth.register(username, password, email);

            history.push(routes.login);

            dispatch(REGISTER.SUCCESS());
        } catch (err) {
            dispatch(REGISTER.ERROR(err.response.data.msg));
        }
    }
};

export const verifyToken = redirectPath => {
    return async dispatch => {
        try {
            const { data } = await API.auth.verify();
            dispatch(LOGIN.SUCCESS(data.user));
            history.push(redirectPath);
        } catch (err) {
            history.push(routes.login);
        }
    }
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('social_token');
        history.push(routes.login);
        dispatch(RESET_STATE);
    }
};
