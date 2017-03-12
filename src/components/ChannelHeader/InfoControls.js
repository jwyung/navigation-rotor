import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const InfoControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Star" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" ariaLabel="5 members" text="5" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" ariaLabel="1 pinned message" text="1" hasFocus={props.hasFocus} />
      <Button className="channel-header-btn" text="Food? You now have my undivided attention." hasFocus={props.hasFocus} />
    </div>
  );
}

export default InfoControls;
