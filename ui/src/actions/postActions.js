import { 
    FETCH_FEED,
    FETCH_USER_POSTS,
    LIKE_POST,
    UNLIKE_POST
} from './types';
import API from 'api';

export const getFeedPosts = () => {
    return async dispatch => {
        try {
            dispatch(FETCH_FEED.START);
            let { data } = await API.posts.following();
            dispatch(FETCH_FEED.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_FEED.ERROR());
        }
    }
};

export const getPosts = username => {
    return async (dispatch, getState) => {
        try {
            if (getState().posts.userPosts[username]) return;

            dispatch(FETCH_USER_POSTS.START);
            let { data } = await API.posts.get(username);
            dispatch(FETCH_USER_POSTS.SUCCESS(data, username));
        } catch (err) {
            dispatch(FETCH_USER_POSTS.ERROR('Error fetching posts!'));
        }
    }
}

export const createPost = (image, caption) => {
    return async dispatch => {
        try {
            let formData = new FormData();
            formData.append('image', image, image.name);
            formData.append('caption', caption);
            
            await API.posts.create(formData);
        } catch (err) {

        }
    }
}

export const likePost = (postId, username) => {
    return async dispatch => {
        try {
            await API.posts.like(postId);
            dispatch(LIKE_POST.SUCCESS({ postId, username }));
        } catch (err) {

        }
    }
}

export const unlikePost = (postId, username) => {
    return async dispatch => {
        try {
            await API.posts.unlike(postId);
            dispatch(UNLIKE_POST.SUCCESS({ postId, username }));
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