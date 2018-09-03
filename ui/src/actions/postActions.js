import { FETCH_FOLLOWING_POSTS } from './types';
import API from 'api';

export const getFollowingPosts = () => {
    return async dispatch => {
        try {
            dispatch(FETCH_FOLLOWING_POSTS.START);
            let { data } = await API.posts.following();

            dispatch(FETCH_FOLLOWING_POSTS.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_FOLLOWING_POSTS.ERROR());
        }
    }
};

export const getPosts = userId => {
    return async dispatch => {
        try {
            let { data } = await API.posts.get(userId);
        } catch (err) {

        }
    }
}

export const createPost = (image, caption) => {
    return async dispatch => {
        try {
            await API.posts.create(image, caption);
        } catch (err) {

        }
    }
}

export const likePost = postId => {
    return async dispatch => {
        try {
            await API.posts.like(postId);
        } catch (err) {

        }
    }
}

export const dislikePost = postId => {
    return async dispatch => {
        try {
            await API.posts.dislike(postId);
        } catch (err) {

        }
    }
}

export const comment = (postId, content) => {
    return async dispatch => {
        try {
            await API.posts.comment(postId, content);
        } catch (err) {

        }
    }
}

export const reply = (postId, content, parentId) => {
    return async dispatch => {
        try {
            await API.posts.reply(postId, content, parentId);
        } catch (err) {

        }
    }
}

export const getComments = postId => {
    return async dispatch => {
        try {
            let { data } = await API.posts.comments(postId);
        } catch (err) {

        }
    }
}

export const getReplies = parentId => {
    return async dispatch => {
        try {
            let { data } = await API.posts.replies(parentId);
        } catch (err) {
            
        }
    }
}