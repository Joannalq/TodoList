import {ADD_TODO} from '../actionType'

const initialState = {
    form:{
        description:'test',
        category: 10,
        content:'test'
    }
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:{
            return{
                ...state,
                form: action.payload
            };
        }
            
    
        default:
            return state;
    }
}