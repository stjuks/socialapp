import { authRequest } from './index';
import axios from 'axios';
import cachios from 'cachios';

const create = async formData => {
    return axios('/posts/create', authRequest({
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    }));
};

const get = async username => {
    return cachios.get(`/posts/get/${username}`, authRequest());
};

const following = async () => {
    return axios.get('/posts/following', authRequest());
};

const like = async postId => {
    return axios.post('/posts/like', { 
        postId 
    }, authRequest());
};

const unlike = async postId => {
    return axios.delete('/posts/like', authRequest({
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
    unlike,
    comment,
    reply,
    comments,
    replies
}