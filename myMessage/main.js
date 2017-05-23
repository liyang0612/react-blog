import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {createStore} from 'redux'
import addtext from './reducer/renducer'
import {Provider} from 'react-redux'
import App from './App.jsx';
import MessageMain from './component/message/messageMain.jsx'

var store = createStore(addtext)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/message" component={MessageMain}/>
        </Router>
    </Provider>, document.getElementById('app'))
