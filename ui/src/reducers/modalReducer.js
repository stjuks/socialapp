import { RESET_STATE } from 'actions/types';

const INITIAL_STATE = {
    upload: false,
    settings: false,
    post: false
};

export default function reducer(state=INITIAL_STATE, action) {
    const { type } = action;
    const matches = /(.*)_(OPEN|CLOSE)/.exec(type);

    if (type === RESET_STATE.type) return INITIAL_STATE;
    if (!matches) return state;

    const [, , request] = matches;
    const isOpenRequest = (request === 'OPEN');

    switch (action.type) {
        case 'UPLOAD_MODAL_' + request: {
            return { ...state, upload: isOpenRequest }
        }
        case 'SETTINGS_' + request: {
            return { ...state, settings: isOpenRequest }
        }
        case 'POST_MODAL_' + request: {
            return { ...state, post: isOpenRequest }
        }
        default: {
            break;
        }
    }

    return state;
}