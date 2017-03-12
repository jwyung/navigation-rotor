import React, { PropTypes } from 'react';

const Button = props => {
	const attrs = props.hasFocus ? {} : { tabIndex: -1 };

  return (
    <button
    	className={props.className}
    	type="button"
    	aria-label={props.ariaLabel}
    	{...attrs}
    >
    	{props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  hasFocus: PropTypes.bool.isRequired,
};

export default Button;
