import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./alert.scss";

export const Alert = props => {
    const type = props.type ? `c-alert--${props.type}` : '';    

    return (
        <div className={`c-alert ${type} ${props.extraClass}`}>
            <div className='c-alert__icon'>
                <FontAwesomeIcon icon={props.icon} />
            </div>            
            <p className='c-alert__text'>{props.text}</p>
        </div>
    )
}

Alert.defaultProps = {
    extraClass: '',
    icon: 'info-circle'
}

Alert.propTypes = {
    type: PropTypes.string,
    extraClass: PropTypes.string,    
    icon: PropTypes.string,
    text: PropTypes.string.isRequired
};