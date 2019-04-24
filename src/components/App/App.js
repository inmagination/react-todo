import React from "react";

// Components
import AddTodo from "../AddTodo/AddTodo";
import {TodoList} from "../TodoList/TodoList";
import { Filters } from "../Filters/Filters";
import { Alert } from "../Alert/Alert";

import "./app.scss";

class App extends React.Component {	
    state = {	
		countTodo: 1,			
        newTodo: "",
		todos: [],
		todoAlert: false
	};
	
	handleChange = e => {
		this.setState({newTodo: e.target.value});
	}	
	
	handleKeyPress = e => {
		if (e.key === "Enter") {

			this.state.newTodo === ''
				? this.setState({todoAlert: true})
				: this.setState({	
					countTodo: this.state.countTodo + 1,			
					newTodo: '',
					todos: [...this.state.todos, { 
						id: this.state.countTodo, 
						text: this.state.newTodo,
						isEditable: false,
						isComplete: false
					}],
					todoAlert: false
				})
		}
	}


	// marcar todo como completado
	handleComplete = id => {		
		this.setState({	
			todos: this.state.todos.filter(todo => { 
				if(todo.id === id) todo.isComplete = !todo.isComplete;
				return todo;				
			})
		});
	}


	// hace editable el todo de la lista
	handleEditable = id => {		
		this.setState({	
			todos: this.state.todos.filter(todo => { 
				if(todo.id === id) todo.isEditable = true;
				return todo;				
			})
		});
	}


	// actualiza el todo con el nuevo texto
	handleUpdate = (todoState, e) => {			
		if ( e.type=== 'blur' || (e.type=== 'keypress' && e.key === "Enter")) {
			this.setState({	
				todos: this.state.todos.filter(todo => { 
					if(todo.id === todoState.id) {
						todo.text = todoState.value;
						todo.isEditable = false;						
					}
					return todo;				
				})
			});	
		}	
	}

	
	// eliminar todo de la lista
	handleRemove = id => {	
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});		
	}	


    render() {
        return (
			<div className='l-container'>				
				<span className='app__icon' role='img' aria-label='app icons'>📝👩🏻📝</span>
				<h1 className='app__title'>React Todo List</h1>
				<p className='app__description'>Add, edit and delete all your tasks thanks to the magic of classic react.</p>				

				<AddTodo 
					value={this.state.newTodo} 					
					changeAdd={this.handleChange} 
					enterAdd={this.handleKeyPress} />	

				{this.state.todoAlert &&
					<Alert 
						type='error'
						icon='times-circle'
						extraClass='margin-top-10'
						text='Empty todo? You have to write something dude' />
				}								

				{this.state.todos.length > 0 &&
					<TodoList 
						todos={this.state.todos}
						completeTodo={this.handleComplete}								
                        editableTodo={this.handleEditable}
                        updateTodo={this.handleUpdate}								
                        removeTodo={this.handleRemove} />				
				}  
				
				<Filters />				            
            </div>
        );
    }
}

export default App;