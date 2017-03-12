import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const ChannelButton = props => {
  return (
  	<Button text={`#${props.channelName}`} />
  );
}

ChannelButton.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default ChannelButton;
