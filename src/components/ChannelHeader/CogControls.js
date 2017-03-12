import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const CogControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Call" />
      <Button className="channel-header-btn" text="Settings" />
      <Button className="channel-header-btn" text="Details" />
    </div>
  );
}

export default CogControls;
