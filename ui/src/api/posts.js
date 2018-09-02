import { authRequest } from './index';
import axios from 'axios';

const create = async (image, caption) => {
    return axios.post('/posts/create', authRequest({
        data: { image, caption }
    }));
};

const get = async userId => {
    return axios.get(`/posts/get/${userId}`);
};

const following = async () => {
    return axios.get('/posts/following', authRequest());
};

const like = async postId => {
    return axios.get('/posts/like', authRequest({
        params: { postId }
    }));
};

const dislike = async postId => {
    return axios.get('/posts/dislike', authRequest({
        params: { postId }
    }));
};

const comment = async (postId, content) => {
    return axios.post('/posts/comment', authRequest({
        data: { postId, content }
    }));
};

const reply = async (postId, content, parentId) => {
    return axios.post('/posts/comment/reply', authRequest({
        data: { postId, content, parentId }
    }));
};

const comments = async postId => {
    return axios.get('/posts/comments', {
        params: { postId }
    });
};

const replies = async parentId => {
    return axios.get('/posts/comments/replies', {
        params: { parentId }
    })
};

export default {
    create,
    get,
    following,
    like,
    dislike,
    comment,
    reply,
    comments,
    replies
}