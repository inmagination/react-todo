import React from "react";
// import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import "./filters.scss";

export const Filters = props => {
	return (
		<ul className='todo-filters'>
            <li>X items left</li>
            <li>
                <Button  
                    size='small'
                    text='All' 
                    color='crimson' />
            </li>
            <li className='filter'>
                <Button 
                    size='small'
                    text='Active' 
                    color='crimson' />
            </li>
            <li>
                <Button  
                    size='small'
                    text='Completed' 
                    color='crimson' />
            </li>					
            <li className='link'>Clear completed</li>
        </ul>        
	);
};