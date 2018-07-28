import auth from './auth';
import posts from './posts';
import user from './user';

export const authRequest = (data) => {
    const token = localStorage.getItem('social_token');
    return {
        ...data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
};

export default {
    login: auth.login,
    register: auth.register,
    verifyToken: auth.verifyToken,
    getFollowingPosts: posts.getFollowingPosts,
    searchUsers: user.searchUsers,
    getSelfFollowing: user.getSelfFollowing,
    getUserProfile: user.getUserProfile,
    handleFollow: user.handleFollow
}