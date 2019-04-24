import React from 'react';
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./button.scss";

export const Button = props => {  
    const sizeClass = props.size ? `c-button--${props.size}` : '';
    const colorClass = props.color ? `c-button--${props.color}` : '';

    return (
        <button
            className={`c-button ${colorClass} ${sizeClass} ${props.extraClass}`} 
            onClick={props.onClick}>
            {props.icon
                ? <FontAwesomeIcon
                    icon={props.icon}
                    className="c-button__icon" />
                : '' }            
            {props.text}
        </button>
      );    
};

Button.defaultProps = {
    extraClass: '',
    icon: '',
    color: ''
}

Button.propTypes = { 
    color: PropTypes.string,
    size: PropTypes.string,
    extraClass: PropTypes.string, 
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};