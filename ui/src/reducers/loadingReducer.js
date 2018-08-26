const INITIAL_STATE = {
    login: false
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
        case 'RESET_STATE': {
            return INITIAL_STATE;
        }
        default: {
            break;
        }
    }

    return state;
}