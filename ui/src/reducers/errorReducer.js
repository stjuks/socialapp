const INITIAL_STATE = {
    login: '',
    register: ''
};

export default function reducer(state=INITIAL_STATE, action) {
    const { type } = action;
    const matches = /(.*)_(START|SUCCESS|ERROR|CLOSE)/.exec(type);

    if (!matches) return state;

    const [, , requestState] = matches;
    const errorMsg = (requestState === 'ERROR') ? action.payload : '';

    switch (action.type) {
        case 'LOGIN_' + requestState: {
            return { ...state, login: errorMsg }
        }
        case 'REGISTER_' + requestState: {
            return { ...state, register: errorMsg }
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