import { FETCH_FOLLOWING_POSTS } from './types/posts';
import API from '../api';

export const getFollowingPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(FETCH_FOLLOWING_POSTS.START);
            let { data } = await API.getFollowingPosts();

            dispatch(FETCH_FOLLOWING_POSTS.SUCCESS(data));
        } catch (err) {
            dispatch(FETCH_FOLLOWING_POSTS.ERROR());
        }
    }
};