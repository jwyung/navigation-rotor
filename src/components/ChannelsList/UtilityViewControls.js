import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const UtilityViewControls = props => {
  return (
    <div className="utility-view-controls">
      <Button text="All Unreads" className="all-unreads-btn channels-list-btn" focusLevel={props.focusLevel} isNaked={true} />
      <Button text="All Threads" className="all-threads-btn channels-list-btn" focusLevel={props.focusLevel} isNaked={true} />
    </div>
  );
}

export default UtilityViewControls;
