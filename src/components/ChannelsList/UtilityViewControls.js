import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const UtilityViewControls = props => {
  return (
    <div className="utility-view-controls">
    	<Button text="All Unreads" className="all-unreads-btn" hasFocus={props.hasFocus} />
    	<Button text="All Threads" className="all-threads-btn" hasFocus={props.hasFocus} />
    </div>
  );
}

export default UtilityViewControls;
