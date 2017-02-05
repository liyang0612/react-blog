import {ADDTEXT} from '../action/action'

function addText(state = [{text: "hello react-redux",key: 1}], action) {
    switch (action.type) {
        case ADDTEXT:
            return [...state,action.text]
        default:
            return state
    }
}

export default addText