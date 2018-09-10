import axios from 'axios';
import { authRequest } from './index';

const login = async (username, password) => {
    return axios.post('/auth/login', { username, password });
};

const register = async (username, password, email) => {
    return axios.post('/auth/register', { username, password, email });
};

const verify = async () => {
    return axios.get('/auth/verify', authRequest());
};

export default {
    login,
    register,
    verify
}