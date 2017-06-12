import * as types from '../action/action'
import { combineReducers } from 'redux';
import myAjax from '../../ajax'

var startState;
//获取数据
myAjax('GET', '/getapi', function (data) {
    startState = JSON.parse(data)
})
function message(state = startState, action) {
    switch (action.type) {
        case types.ADDTEXT:
            myAjax('post', '/addapi', function (data) {
                
            }, action.text)
            return [...state, action.text]
        case types.DELETETEXT:
            state.forEach(function (val, index) {
                if (val.key == action.text) {
                    myAjax('POST', '/deleteapi', function (data) {

                    },{key: action.text})
                    state.splice(index, 1)
                }
            })
            return [...state]
        default:
            return state
    }
}

function articleUpdate(state = {}, action) {
    switch (action.type) {
        case types.ARTICLEUPDATE:
            console.log("success")
            return [...state, action.text];
        default :
            return state;
    }
}

const blogState = combineReducers({
    message,
	articleUpdate
    })

export default blogState