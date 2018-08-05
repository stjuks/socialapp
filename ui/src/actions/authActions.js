import history from 'helpers/history';
import { getSelfFollowing } from './userActions';
import { LOGIN, REGISTER } from './types/auth';
import { RESET_STATE } from './types';
import API from 'api';

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(LOGIN.START);

            const { data } = await API.login(username, password);

            localStorage.setItem('social_token', data.token);

            dispatch(LOGIN.SUCCESS(data.user));
            dispatch(getSelfFollowing());

            history.push('/');
        } catch (err) {
            dispatch(LOGIN.ERROR(err.response.data.msg));
        }
    }
};

export const register = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(REGISTER.START);

            await API.register(username, password);

            history.push('/login');

            dispatch(REGISTER.SUCCESS);
        } catch (err) {
            dispatch(REGISTER.ERROR(err.response.data.msg));
        }
    }
};

export const verifyToken = () => {
    return async (dispatch) => {
        try {
            const { data } = await API.verifyToken();

            dispatch(LOGIN.SUCCESS(data.user));
            dispatch(getSelfFollowing());

        } catch (err) {
            dispatch(LOGIN.ERROR(err.response.data.msg));
            history.push('/login');
        }
    }
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('social_token');
        history.push('/login');
        dispatch(RESET_STATE);
    }
};
