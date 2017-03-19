import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const ChannelButton = props => {
  return (
  	<Button className="channels-list-btn" text={`# ${props.channelName}`} hasFocus={props.hasFocus} isNaked={true} />
  );
}

ChannelButton.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default ChannelButton;
