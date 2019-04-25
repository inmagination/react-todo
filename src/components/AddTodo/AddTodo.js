import React from "react";
import PropTypes from "prop-types";

import { Alert } from "../Alert/Alert";
import { Input } from "../Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./add-todo.scss";

class AddTodo extends React.Component {    
    state = { alert: false }

    changeTodo = e => this.props.changeAdd(e);    
    clickAll = () => this.props.selectAll();

    enterTodo = (e) => { 
        if (e.key === "Enter") {

            if (!e.target.value) {
                this.setState({alert: true}) 
                setTimeout(() => {                    
                    this.setState({alert: false})
                }, 3000); 

            } else {
                this.setState({alert: false})
            } 
        } 
        this.props.enterAdd(e);
    }

    render () {
        return (
            <React.Fragment>
                <div className='todo-add'>            
                    {this.props.totalTodos > 0 &&
                        <div 
                            className='todo-add__all'
                            onClick={this.clickAll}>
                            <FontAwesomeIcon icon='chevron-down' />
                        </div>
                    }

                    <Input
                        placeholder='Write a new todo and press enter' 
                        extraClass='todo-add__input'
                        value={this.props.value}
                        onChange={(e) => this.changeTodo(e)} 
                        onKeyPress={(e) => this.enterTodo(e)} />                    		
                </div> 


                {this.state.alert &&
                   <Alert 
                        type='error'
                        icon='times-circle'
                        extraClass='margin-top-10'
                        text='Empty todo? You have to write something!!' />  
                }              

            </React.Fragment>
        );
    }
};

export default AddTodo;

AddTodo.propTypes = { 
    totalTodos: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
};
