import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const InfoControls = props => {
	return (
    <div>
      <Button className="channel-header-btn" text="Star" />
      <Button className="channel-header-btn" ariaLabel="5 members" text="5" />
      <Button className="channel-header-btn" ariaLabel="1 pinned message" text="1" />
      <Button className="channel-header-btn" text="Food? You now have my undivided attention." />
    </div>
  );
}

export default InfoControls;
