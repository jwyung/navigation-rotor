import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const CogControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Details" hasFocus={props.hasFocus} isNaked={true} />
    </div>
  );
}

export default CogControls;
