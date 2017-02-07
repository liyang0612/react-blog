import {ADDTEXT} from '../action/action'
import {DELETETEXT} from '../action/action'
import myAjax from '../ajax'

var startState;
//获取数据
myAjax('GET', '/getapi', function (data) {
    startState = JSON.parse(data)
})
function addText(state = startState, action) {
    switch (action.type) {
        case ADDTEXT:
            myAjax('post', '/addapi', function (data) {
                
            }, action.text)
            return [...state, action.text]
        case DELETETEXT:
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

export default addText