import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const GenericControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Show Activity" />
      <Button className="channel-header-btn" text="Show Starred Items" />
      <Button className="channel-header-btn" text="More Items" />
    </div>
  );
}

export default GenericControls;
