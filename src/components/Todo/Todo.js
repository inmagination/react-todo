import React from "react";
import PropTypes from "prop-types";

import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./todo.scss";

class Todo extends React.Component {
	state = {	
		value: this.props.text
	}

	handleChange = e => this.setState({value: e.target.value});	

	checkTodo = (id, e) => this.props.completeTodoList(id, e);
	editTodo = id => this.props.editableTodoList(id);
	textTodo = (state, e) => this.props.updateTodoList(state, e);
	deleteTodo = id => this.props.removeTodoList(id);		

    render() {			
		const props = this.props;
		const completeClass = props.isComplete ? 'is-complete' : '';		

        return (	
			<li className={`todo ${completeClass}`}>
				<Checkbox
					extraClass='todo__check'
					id={props.id}	
					checked={props.isComplete}				
					onChange={() => this.checkTodo(props.id)} />

				{!props.isEditable ? (					
					<div className='todo__text'>{this.state.value}</div>

				) : (
					<Input						
						extraClass='todo__input'	
						value={this.state.value}	
						onChange={this.handleChange} 
						onBlur={(e) => this.textTodo(this.state, e)}
						onKeyPress={(e) => this.textTodo(this.state, e) } />	
				)}	

				<div 
					className='todo__icon'
					onClick={() => this.editTodo(props.id)}>		
					<FontAwesomeIcon icon='pencil-alt' />							
				</div>			
					
				<div 
					className='todo__icon'
					onClick={() => this.deleteTodo(props.id)}>		
					<FontAwesomeIcon icon='trash-alt' />							
				</div>
			</li>
						
		)
    }
}

export default Todo;

Todo.propTypes = {
	id: PropTypes.number,
	isComplete: PropTypes.bool,
	isEditable: PropTypes.bool,
	text: PropTypes.string,
	completeTodoList: PropTypes.func,
	editableTodoList: PropTypes.func,
	removeTodoList: PropTypes.func,
	updateTodoList: PropTypes.func
};