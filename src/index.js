import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.less';
import {Provider} from 'react-redux';
import * as actions from './actions';
import Store from './store';
import {firebaseAuth, storageKey} from './firebase';
import App from './components/App';

firebaseAuth.onAuthStateChanged((user)=>{
    if(user){
        localStorage.setItem(storageKey, user.uid);
        Store.dispatch(actions.login(user.uid));
    } else{
        localStorage.removeItem(storageKey);
        Store.dispatch(actions.logout());
    }
});

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));