import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import addtext from './src/redux/reducer/renducer'
import {Provider} from 'react-redux'
import router from './src/router'
import './src/static/base.scss'

var store = createStore(addtext)
ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>, document.getElementById('app'))
