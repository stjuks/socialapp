import { authRequest } from './index';
import axios from 'axios';

const getFollowingPosts = async () => {
    return axios.get('/posts/following', authRequest());
};

export default {
    getFollowingPosts
}