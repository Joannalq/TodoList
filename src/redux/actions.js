import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_CHECKLIST,
  DELETE_SELECTITEMS,
} from "./actionType";

let nextTodoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const updateCheckList = (items) => ({
  type: UPDATE_CHECKLIST,
  payload: items,
});

export const deleteSelectedItems = (checkList) => ({
  type: DELETE_SELECTITEMS,
  payload: {
    checkList,
  },
});
