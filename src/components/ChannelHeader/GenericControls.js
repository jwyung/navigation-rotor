import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const GenericControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Show Activity" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" text="Show Starred Items" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" text="More Items" hasFocus={props.hasFocus} />
    </div>
  );
}

export default GenericControls;
