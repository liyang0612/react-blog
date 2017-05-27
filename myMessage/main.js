import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'
import {createStore} from 'redux'
import addtext from './reducer/renducer'
import {Provider} from 'react-redux'
import App from './App.jsx';
import MessageMain from './component/message/messageMain.jsx'
import Detail from './component/detail.jsx'
import Login from './component/management/login.jsx'
import './static/base.scss'

var store = createStore(addtext)
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/message" component={MessageMain}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/login" component={Login}/>
        </Router>
    </Provider>, document.getElementById('app'))
