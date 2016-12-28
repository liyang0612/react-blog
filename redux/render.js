import { ADDUSER } from './action'
import {combineReducers} from 'redux'

function add(state=[],action) {
    switch (action.type){
        case ADDUSER:
            return [...state,action.text]
        default : return state
    }
}

const addUer = combineReducers({
    add
})

export default addUer