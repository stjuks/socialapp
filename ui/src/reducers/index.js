import { combineReducers } from 'redux';

import user from './userReducer';
import posts from './postReducer';
import modal from './modalReducer';
import loading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
    user,
    posts,
    modal,
    error,
    loading
})