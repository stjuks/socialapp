const INITIAL_STATE = {
    username: null,
    userId: null
};

export default function reducer(state=INITIAL_STATE, action) {

    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                username: action.payload.username,
                userId: action.payload.id
            }
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