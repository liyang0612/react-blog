import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {createStore} from 'redux'
import addtext from './reducer/renducer'
import {Provider} from 'react-redux'
import App from './App.jsx';
import MessageMain from './component/message/messageMain.jsx'
import Detail from './component/detail.jsx'
import Login from './component/admin/login.jsx'
import Admin from './component/admin/adminHome'
import Add from './component/admin/add'
import './static/base.scss'

var store = createStore(addtext)
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/message" component={MessageMain}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}>
                <Route path="/admin/add" component={Add}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'))
