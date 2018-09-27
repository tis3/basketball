import authReducer from "./authReducer";
import {combineReducers} from 'redux';

const state = combineReducers({
    auth: authReducer
});



export default state;