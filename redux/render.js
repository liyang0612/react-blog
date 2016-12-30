import {ADDUSER, DELETEUSER, EDITUSER, INDEX} from './action'
import {combineReducers} from 'redux'

function add(state = [{name: "liyang", password: "123455", sex: "男", index: 1}], action) {
    switch (action.type) {
        case ADDUSER:
            return [...state, action.text]
        case DELETEUSER:
            state.splice(action.index, 1)
            return [...state]
        //不可直接修改state
        //slice写法
        //    return [...state.slice(0,action.index),
        //            ...state.slice(action.index)]
        case EDITUSER:
            let len = state.length;
            if (action.index != undefined)
                state[len - 1].index = action.index;
            if (action.text != undefined)
                [...state.splice(state[len - 1].index, 1, action.text)]
            return [...state]
        default :
            return state
    }
}

function index(state=[0],action) {
    switch(action.type){
        case INDEX:
            state.splice(0,1,action.index)
            return [...state]
        default:
            return state
    }
}

const addUer = combineReducers({
    add,index
})

export default addUer