import axios from 'axios';
import cachios from 'cachios';

import { authRequest } from './index';

const searchUsers = async (query) => {
    return axios.get('/users/search', {
        params: {
            query
        }
    });
};

const getSelfFollowing = async (userId) => {
    return cachios.get(`/users/following/${userId}`, authRequest());
};

const getUserProfile = async (username) => {
    return cachios.get(`/users/get/${username}`, authRequest());
};

const handleFollow = async (userId, isFollowing) => {
    return axios.get(`/users/${isFollowing ? 'unfollow' : 'follow'}/${userId}`, authRequest());
};

export default {
    searchUsers,
    getSelfFollowing,
    getUserProfile,
    handleFollow
}