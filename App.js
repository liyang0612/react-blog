/**
 * Created by 李洋 on 2016/12/27.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import UserManagement from './component/UserManagement.jsx'
import {Router, Route, browserHistory} from 'react-router'
import AddUser from './view/addUser.jsx'
import {createStore} from 'redux'
import addUer from './redux/render'
import {Provider} from 'react-redux'
const store = createStore(addUer)
const render = () => ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={UserManagement}/>
            <Route path="addUser" component={AddUser}/>
        </Router>
    </Provider>
    , document.getElementById('app'))

render();

store.subscribe(render);