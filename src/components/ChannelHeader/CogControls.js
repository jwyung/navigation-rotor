import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const CogControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Call" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" text="Settings" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" text="Details" hasFocus={props.hasFocus} />
    </div>
  );
}

export default CogControls;
