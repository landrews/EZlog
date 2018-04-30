import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from './store/';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Let the reducers handle initial state
const initialState = {};
const store = Store(initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
