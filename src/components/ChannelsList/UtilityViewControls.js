import React, { PropTypes } from 'react';

const UtilityViewControls = props => {
  return (
    <div className="utility-view-controls">
      <button className="all-unreads-btn" type="button">All Unreads</button>
      <button className="all-threads-btn" type="button">All Threads</button>
    </div>
  );
}

export default UtilityViewControls;
