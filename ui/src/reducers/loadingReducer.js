const INITIAL_STATE = {
    login: false,
    register: false,
    createPost: false
};

export default function reducer(state=INITIAL_STATE, action) {
    const { type } = action;
    const matches = /(.*)_(START|SUCCESS|ERROR)/.exec(type);

    if (!matches) return state;

    const [, , requestState] = matches;
    const isStartRequest = (requestState === 'START');

    switch (action.type) {
        case 'LOGIN_' + requestState: {
            return { ...state, login: isStartRequest }
        }
        case 'REGISTER_' + requestState: {
            return { ...state, register: isStartRequest }
        }
        case 'CREATE_POST_' + requestState: {
            return { ...state, createPost: isStartRequest }
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