import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const UtilityViewControls = props => {
  return (
    <div className="utility-view-controls">
    	<Button text="All Unreads" className="all-unreads-btn" />
    	<Button text="All Threads" className="all-threads-btn" />
    </div>
  );
}

export default UtilityViewControls;
