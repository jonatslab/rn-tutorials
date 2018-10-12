import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
         EMPLOYEE_UPDATE,
         EMPLOYEE_FORM_CLEAR,
         EMPLOYEES_FETCH_SUCCESS
      } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({
            name,
            phone,
            shift
        })
        .then(() => 
            Actions.employeeList(),
            dispatch({
                type: EMPLOYEE_FORM_CLEAR
            })
        );
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
}; 

export const employeeFormClear = () => {
      return {
          type: EMPLOYEE_FORM_CLEAR
      }; 
};

export const employeeSaveChanges = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
 
    return () => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                Actions.employeeList();
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList();
            });
    };
};
