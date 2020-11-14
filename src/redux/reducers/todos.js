import {ADD_TODO,DELETE_TODO,UPDATE_CHECKLIST, DELETE_SELECTITEMS} from '../actionType'

const initialState = {
    items:[],
    checkList:[]
}



export default function(state=initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case ADD_TODO:{
            return{ 
                ...state, 
                items: [... state.items, action.payload]
            };
        }
        
        case DELETE_TODO:
            return {
            items: [...state.items.filter( item => item.id !== action.payload.id)]
            };

        case UPDATE_CHECKLIST:{
            const { id} = action.payload;
            let checkList = [];
            const index = state.checkList.findIndex(item => item.id === id);
            if(index < 0) {
                checkList = [...state.checkList, action.payload]
            } else {
                state.checkList[index] = action.payload;
                checkList = [...state.checkList];
            }

            return{
                ...state,
                checkList
            }
        }
        
        case DELETE_SELECTITEMS: {
            const {checkList} = action.payload
            const checkedIds = checkList.map(checkedItem => {return checkedItem.id})
            return{
                items:[...state.items.filter(item => {
                    if (!checkedIds.includes(item.id)){
                        return item
                    }
                })],
                checkList: [...state.checkList.filter(singleCheckItem => {
                    if(!checkedIds.includes(singleCheckItem.id)){
                        return singleCheckItem
                    }
                })]
            }
        }
            
        default:
            return state;
    }
}