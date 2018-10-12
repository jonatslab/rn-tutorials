import { 
        EMAIL_CHANGED, 
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILED,
        LOGGING_USER,
        LOGGED_USER
    } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false,
    loggedIn: true
    };

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loggedIn: true };
        case LOGIN_USER_FAILED: 
            return { ...state, error: action.payload, password: '', loading: false, loggedIn: false };
        case LOGGING_USER:
            return { ...state, loading: true };
        case LOGGED_USER:
            return { ...state, loggedIn: action.payload };
        default: 
            return state;
    }
};

