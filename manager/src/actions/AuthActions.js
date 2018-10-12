import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGGING_USER,
    LOGGED_USER
 } from './types';

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

export const onLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: LOGGING_USER
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch((error) => loginFailed(dispatch, error.message));
            });    

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                loggedUser(dispatch, true);
            } else {
                loggedUser(dispatch, false);
            }
        });       
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    

    Actions.employeeList();
};
const loginFailed = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAILED,
        payload: error
    });
};

const loggedUser = (dispatch, status) => {
    dispatch({
        type: LOGGED_USER,
        payload: status
    });
    console.log(status);
};
