import React from "react";

// Components
import AddTodo from "../AddTodo/AddTodo";
import { TodoList} from "../TodoList/TodoList";
import { Filters } from "../Filters/Filters";
import { Alert } from "../Alert/Alert";

import "./app.scss";

class App extends React.Component {	
    state = {	
		countTodo: 1,
		countCompleted: 0,			
        newTodo: "",
		todos: [],
		displayTodos: [],
		todoAlert: false,
		selectAll: false,
		filter: 'All'		
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
		let countChecked = 0;
		const todoList = this.state.todos.filter(todo => { 
			if (todo.id === id) todo.isComplete = !todo.isComplete;
			if (todo.isComplete) countChecked++;
			return todo;				
		})
		
		this.setState({	
			countCompleted: countChecked,
			todos: todoList
		});
	}

	// hace editable el todo de la lista
	handleEditable = id => {		
		this.setState({	
			todos: this.state.todos.filter(todo => { 
				if (todo.id === id) todo.isEditable = true;
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
		let completed = this.state.countCompleted;
		this.state.todos.filter(todo => {
			if (todo.id === id && todo.isComplete ) completed--;
			return completed;			 
		})		

		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
			countCompleted: completed
		});
	}	

	// seleccionar/deseleccionar todos los todos 
	handleClickAll = () => {	
		let completed = 0;
		const todoList = this.state.todos.map(todo => { 
			if (todo.isComplete !== !this.state.selectAll) {
				todo.isComplete = !this.state.selectAll;
			}	
			if (todo.isComplete) completed++;			
			return todo;			 				
		})
		
		this.setState({	
			todos: todoList,
			selectAll: !this.state.selectAll,
			countCompleted: completed
		})

		let displayTodos = showFilter(this.state.todos, this.state.filter);
		this.setState({displayTodos});
	}

	// eliminar todos completados
	handleClearCompleted = () => {
		this.setState({
			todos: this.state.todos.filter(todo => !todo.isComplete),
			displayTodos: this.state.displayTodos.filter(todo => !todo.isComplete),
			countCompleted: 0
		});		
	}

	// filtrar todos
	handleFilterTodos = filter => {
		let actualFilter = this.state.filter;
		if (filter !== actualFilter) this.setState({filter});	
		let displayTodos = showFilter(this.state.todos, filter);
		this.setState({displayTodos});
	}

    render() {
        return (
			<div className='l-container'>				
				<span className='app__icon' role='img' aria-label='app icons'>📝👩🏻📝</span>
				<h1 className='app__title'>React Todo List</h1>
				<p className='app__description'>Add, edit and delete all your tasks thanks to the magic of classic react.</p>				

				<AddTodo 
					totalTodos={this.state.todos.length}
					value={this.state.newTodo} 					
					changeAdd={this.handleChange} 
					enterAdd={this.handleKeyPress} 
					selectAll={this.handleClickAll} />	

				{this.state.todoAlert &&
					<Alert 
						type='error'
						icon='times-circle'
						extraClass='margin-top-10'
						text='Empty todo? You have to write something dude' />
				}								

				{this.state.todos.length > 0 &&
					<TodoList 
						todos={this.state.filter === 'All'
							? this.state.todos 
							: this.state.displayTodos }					
						filter={this.state.filter}
						completeTodo={this.handleComplete}								
                        editableTodo={this.handleEditable}
                        updateTodo={this.handleUpdate}								
                        removeTodo={this.handleRemove} />				
				}  
				
				<Filters 
					totalTodos={this.state.todos.length}
					countCompleted={this.state.countCompleted}
					clearCompleted={this.handleClearCompleted} 
					filterTodos={this.handleFilterTodos} />				            
            </div>
        );
    }
}

export default App;


// Devolver array para mostrar 
const showFilter = (todos, filter) => {	
	if (filter === 'Active') return todos.filter(todo => !todo.isComplete );
	else if (filter === 'Completed') return todos.filter(todo => todo.isComplete );
	else return todos;
}