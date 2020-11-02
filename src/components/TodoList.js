import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo } from "../redux/actions";

const TodoList = ({todos}) => (
    <table className="todo-list">
        {todos && todos.length ?
        todos.map((todo, index)=>{return <Todo key={`todo-${todo.id}`} todo={todo}/>})
        :'nothing to show'}
    </table>
)

const mapStateToProps = state => {
    console.log(state)
    return {todos:[]}
}

export default connect(mapStateToProps,{addTodo})(TodoList)