import {CHANGE_INPUT} from './actionType'

const defaultState = {
    id:0,
    inputValue: '',
    list:[]
}

export default(state = defaultState, action) => {
    switch (action.type){
        case CHANGE_INPUT:
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        default:
            return state
    }
}