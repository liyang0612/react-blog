import {ADDTEXT} from '../action/action'
import myAjax from '../ajax'

var startState;
myAjax('GET', '/api', function (data) {
    startState = JSON.parse(data)
})
function addText(state = startState, action) {
    switch (action.type) {
        case ADDTEXT:
            return [...state, action.text]
        default:
            return state
    }
}

export default addText