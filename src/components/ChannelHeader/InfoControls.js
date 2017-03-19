import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const InfoControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Star" hasFocus={props.hasFocus} isNaked={true} />
    </div>
  );
}

export default InfoControls;
