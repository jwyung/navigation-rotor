import React, { PropTypes } from 'react';

const ChannelButton = props => {
  return (
    <button type="button">#{props.channelName}</button>
  );
}

ChannelButton.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default ChannelButton;
