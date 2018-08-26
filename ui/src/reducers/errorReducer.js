const INITIAL_STATE = {
    login: ''
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
        case 'RESET_STATE': {
            return INITIAL_STATE;
        }
        default: {
            break;
        }
    }

    return state;
}