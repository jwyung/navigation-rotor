import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const GenericControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="More Items" hasFocus={props.hasFocus} isNaked={true} />
    </div>
  );
}

export default GenericControls;
