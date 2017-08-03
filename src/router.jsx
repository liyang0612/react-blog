import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from '../App.jsx'
import List from './components/home/list'
import MessageMain from './components/message/messageMain.jsx'
import Detail from './components/detail.jsx'
import Login from './components/admin/login.jsx'
import Admin from './components/admin/adminHome'
import Add from './components/admin/add'
import Articles from './components/admin/articles'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={List}/>
            <Route path="message" component={MessageMain}/>
            <Route path="detail" component={Detail}/>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}>
            <IndexRoute component={Articles}/>
            <Route path="/admin/add" component={Add}/>
            <Route path="/admin/update" component={Add}/>
        </Route>
    </Router>
)