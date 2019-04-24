import React from "react";
import PropTypes from "prop-types";

import Todo from "../Todo/Todo";
import "./todo-list.scss";

export const TodoList = props => {    
    return (
        <ul className='todo-list'>
            {props.todos.map(todo => 
                <Todo 
                    key={todo.id} 
                    {...todo} 
                    completeTodoList={props.completeTodo}								
                    editableTodoList={props.editableTodo}	
                    updateTodoList={props.updateTodo}									
                    removeTodoList={props.removeTodo} />							 
            )} 
        </ul>
    )
}

TodoList.propTypes = { 
    todo: PropTypes.arrayOf(PropTypes.element).isRequired,
    completeTodoList: PropTypes.func,
    editableTodoList: PropTypes.func,
    updateTodoList: PropTypes.func,    
    removeTodoList: PropTypes.func
};