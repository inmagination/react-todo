import React from "react";
import PropTypes from "prop-types";

import { Input } from "../Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./add-todo.scss";

class AddTodo extends React.Component {
    changeTodo = e => this.props.changeAdd(e);
    enterTodo = e => this.props.enterAdd(e);

    render () {
        return (
            <div className='todo-add'>	
                <div className='todo-add__all'>
                    <FontAwesomeIcon  icon='chevron-down' />
                </div>

                <Input
                    placeholder='Write a new todo and press enter' 
                    extraClass='todo-add__input'
                    value={this.props.value}
                    onChange={(e) => this.changeTodo(e)} 
                    onKeyPress={(e) => this.enterTodo(e)} />                    		
            </div>       
        );
    }
};

export default AddTodo;

AddTodo.propTypes = { 
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
};