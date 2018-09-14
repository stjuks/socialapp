import axios from 'axios';
import cachios from 'cachios';

import { authRequest } from './index';

const search = async query => {
    return cachios.get('/users/search', {
        params: { query }
    });
};

const following = async userId => {
    return axios.get(`/users/following/${userId}`, authRequest());
};

const followers = async userId => {
    return axios.get(`/users/followers/${userId}`, authRequest());
}

const profile = async username => {
    return axios.get(`/users/get/${username}`, authRequest());
};

const follow = async userId => {
    return axios.get(`/users/follow/${userId}`, authRequest());
};

const unfollow = async userId => {
    return axios.get(`/users/unfollow/${userId}`, authRequest());
}

export default {
    search,
    following,
    followers,
    profile,
    follow,
    unfollow
}