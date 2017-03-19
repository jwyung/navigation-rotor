import React, { PropTypes } from 'react';

const Button = props => {
  const attrs = props.focusLevel ? {} : { tabIndex: -1 };
  const className = props.isNaked ? `${props.className || ''} naked-btn` : props.className;

  return (
    <button
      className={className}
      type="button"
      aria-label={props.ariaLabel}
      {...attrs}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  focusLevel: PropTypes.number,
  isNaked: PropTypes.bool,
};

export default Button;
