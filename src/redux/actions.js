import {ADD_TODO, DELETE_TODO} from './actionType'

let nextTodoId = 0
export const addTodo = (content)=>({
    type:ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {id}
})