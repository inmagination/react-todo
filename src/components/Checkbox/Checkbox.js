import React from "react";
import PropTypes from "prop-types";

import "./checkbox.scss";

export const Checkbox = props => {
    return (
        <div className={`c-checkbox ${props.extraClass}`}>
            <input 
                className='c-checkbox__input' 
                type='checkbox' 
                id={props.id}
                checked={props.isChecked}
                onChange={props.onChange} />  
                        
            <label 
                className='c-checkbox__label' 
                htmlFor={props.id}>
                {props.text}
            </label>            
        </div>
    )
}

Checkbox.defaultProps = {
    extraClass: ''
}

Checkbox.propTypes = {
    extraClass: PropTypes.string,
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string
};