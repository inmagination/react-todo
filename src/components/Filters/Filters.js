import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import "./filters.scss";

export const Filters = props => {
    const clickCompleted = () => props.clearCompleted();
    const clickFilter = filter => props.filterTodos(filter);

	return (
		<ul className='todo-filters'>
            <li className='filter filter__items'>{props.totalTodos - props.countCompleted} items left</li>

            <li className='filter filter__buttons'>
                <Button  
                    size='small'
                    text='All' 
                    color='crimson' 
                    onClick={() => clickFilter('All') } />            
                <Button 
                    size='small'
                    text='Active' 
                    color='crimson'
                    onClick={() => clickFilter('Active') } />            
                <Button  
                    size='small'
                    text='Completed' 
                    color='crimson' 
                    onClick={() => clickFilter('Completed') } />
            </li>            

            {props.countCompleted > 0 &&				
                <li className='filter filter__clear'>
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