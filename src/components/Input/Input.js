import React from "react";
import PropTypes from "prop-types";

import "./input.scss";

export const Input = props => {
	return (
		<input
			className={`c-input ${props.extraClass}`}
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange} 
			onKeyPress={props.onKeyPress} 
			onBlur={props.onBlur} />
	);
};

Input.defaultProps = {
	extraClass: '',
    type: 'text'
}

Input.propTypes = {
	extraClass: PropTypes.string,
  	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,  	
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	onBlur: PropTypes.func
};