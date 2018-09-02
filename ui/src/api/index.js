import auth from './auth';
import posts from './posts';
import users from './user';

export const authRequest = (data) => {
    const token = localStorage.getItem('social_token');
    return {
        ...data,
        headers: {
            ...data.headers,
            Authorization: `Bearer ${token}`
        }
    }
};

export default {
    auth,
    posts,
    users
}