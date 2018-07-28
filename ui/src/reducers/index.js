import { combineReducers } from 'redux';

import user from './userReducer';
import posts from './postReducer';
import modal from './modalReducer';

export default combineReducers({
    user,
    posts,
    modal
})