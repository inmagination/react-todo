import React from 'react';
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./button.scss";

export const Button = props => {  
    const sizeClass = props.size ? `c-button--${props.size}` : '';
    const typeClass = props.type ? `c-button--${props.type}` : '';
    const colorClass = props.color ? `c-button--${props.color}` : '';

    return (
        <button
            className={`c-button ${colorClass} ${typeClass} ${sizeClass} ${props.extraClass}`} 
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
    type: '',
    extraClass: '',
    icon: '',
    color: ''
}

Button.propTypes = { 
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    extraClass: PropTypes.string, 
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};