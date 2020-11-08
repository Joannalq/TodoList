import {ADD_TODO,DELETE_TODO} from '../actionType'

const initialState = {
    items:[]
}


export default function(state=initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case ADD_TODO:{
            return{ 
                ...state, 
                items: [... state.items, action.payload]
            };
        }
        
        case DELETE_TODO:
            return {
            //    items: [...state.items.filter( item => item !== action.payload)]
            items: [...state.items.filter( item => item.id !== action.payload.id)]
            };
    
        default:
            return state;
    }
}