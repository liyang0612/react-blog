import {ADDUSER, DELETEUSER} from './action'
import {combineReducers} from 'redux'

function add(state = [{name: "liyang", password: "123455", sex: "男"}], action) {
    switch (action.type) {
        case ADDUSER:
            return [...state, action.text]
        case DELETEUSER:
            state.splice(action.index,1)
            return [...state]
        //不可直接修改state
        //slice写法
        //    return [...state.slice(0,action.index),
        //            ...state.slice(action.index)]
        default :
            return state
    }
}


const addUer = combineReducers({
    add
})

export default addUer