import {
    UPLOAD_MODAL
} from 'actions/types';

const INITIAL_STATE = {
    login: '',
    register: '',
    createPost: ''
};

export default function reducer(state=INITIAL_STATE, action) {
    const { type } = action;
    const matches = /(.*)_(START|SUCCESS|ERROR|CLOSE|STATE)/.exec(type);

    if (!matches) return state;

    const [, , requestState] = matches;
    const errorMsg = (requestState === 'ERROR') ? action.payload : '';

    switch (action.type) {
        case UPLOAD_MODAL.CLOSE.type: {
            return { ...state, createPost: '' }
        }
        case 'LOGIN_' + requestState: {
            return { ...state, login: errorMsg }
        }
        case 'REGISTER_' + requestState: {
            return { ...state, register: errorMsg }
        }
        case 'CREATE_POST_' + requestState: {
            return { ...state, createPost: errorMsg }
        }
        case 'RESET_STATE': {
            return INITIAL_STATE;
        }
        default: {
            break;
        }
    }

    return state;
}