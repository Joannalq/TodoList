import {ADD_TODO} from './actionType'

// let nextTodoId = 0
export const addTodo = (content)=>({
    type:ADD_TODO,
    payload: content
})