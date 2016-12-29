/**
 * Created by 李洋 on 2016/12/27.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import UserManagement from './component/UserManagement.jsx'
import {Router, Route, browserHistory} from 'react-router'
import AddUser from './route/addUser.jsx'
import EditInfo from './route/editInfo.jsx'
import {createStore} from 'redux'
import addUer from './redux/render'
import {Provider} from 'react-redux'
const store = createStore(addUer)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={UserManagement}/>
			<Route path="addUser" component={AddUser}/>
			<Route path="editUser" component={EditInfo}/>
		</Router>
	</Provider>
	, document.getElementById('app'))