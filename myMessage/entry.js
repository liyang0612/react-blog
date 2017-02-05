import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import addtext from './reducer/renducer'
import {Provider} from 'react-redux'
import App from './App.jsx';

var store = createStore(addtext)
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'))
