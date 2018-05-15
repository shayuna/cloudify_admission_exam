import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import {setTreeHasChanged} from "./actions";

import App from './App';

const store = configureStore(); 

const renderApp = ()=>{
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('#eRoot')
    );
}

store.subscribe(()=>{
    renderApp();
    console.log (store.getState()); 
})

renderApp();