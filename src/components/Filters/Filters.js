import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import "./filters.scss";

export const Filters = props => {
    const clickCompleted = () => props.clearCompleted();
    const clickFilter = filter => props.filterTodos(filter);

	return (
		<ul className='todo-filters'>
            <li>{props.totalTodos - props.countCompleted} items left</li>

            <li>
                <Button  
                    size='small'
                    text='All' 
                    color='crimson' 
                    onClick={() => clickFilter('All') } />
            </li>

            <li>
                <Button 
                    size='small'
                    text='Active' 
                    color='crimson'
                    onClick={() => clickFilter('Active') } />
            </li>

            <li>
                <Button  
                    size='small'
                    text='Completed' 
                    color='crimson' 
                    onClick={() => clickFilter('Completed') } />
            </li>	

            {props.countCompleted > 0 &&				
                <li>
                    <Button  
                        type='link'
                        size='small'
                        text='Clear completed' 
                        onClick={() => clickCompleted() } />
                </li>
            }
        </ul>        
	);
};

Filters.propTypes = { 
    countCompleted: PropTypes.number,
    totalTodos: PropTypes.number,
    clearCompleted: PropTypes.func,
    filterTodos: PropTypes.func
};