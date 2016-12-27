import { ADDUSER } from './action'
import {combineReducers} from 'redux'

function add(state={name:"liyang"},action) {
    // console.log(action.type,ADDUSER)
    switch (action.type){
        case ADDUSER:
            console.log("添加成功");
            return Object.assign({},state,{text:action.text})
        default : return state
    }
}

const addUer = combineReducers({
    add
})

export default addUer