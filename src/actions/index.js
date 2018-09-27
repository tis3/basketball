import * as types from './types';
import {authenticate, SignOut} from '../firebase/auth';

export function login(uid) {
    return {
        type: types.LOGIN,
        uid
    }
}

export function logout() {
    return {
        type: types.LOGOUT
    }
}

export function startLogin(user, password) {
    return (dispatch, getState) => {
        return authenticate(user, password).then((result) => {
            return result;
        }, (error) => {
            return error;
        });
    }
}

export function startLogout() {
    return (dispatch, getState) => {
        return SignOut().then((result) => {
            return result;
        }, (error) => {
            return error;
        });
    }
}