const INITIAL_STATE = {
    upload: false
};

export default function reducer(state=INITIAL_STATE, action) {
    const { type } = action;
    const matches = /(.*)_(OPEN|CLOSE)/.exec(type);

    if (!matches) return state;

    const [, , request] = matches;
    const isOpenRequest = (request === 'OPEN');

    switch (action.type) {
        case 'UPLOAD_' + request: {
            return { ...state, upload: isOpenRequest }
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