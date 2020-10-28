
import React, { Component } from 'react';
import TodoFormUI from './TodoFormUI'
import store from '../store/index'
import {changeInputAction} from '../store/actionCreators'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    render() {
        return (
            <TodoFormUI
             inputValue = {this.state.inputValue}
             changeInputValue = {this.changeInputValue}/>
        );
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
}

export default TodoList;
