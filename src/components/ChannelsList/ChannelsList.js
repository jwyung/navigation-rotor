import React, { PropTypes } from 'react';
import TeamHeader from './TeamHeader';
import UtilityViewControls from './UtilityViewControls';
import Navigation from './Navigation';
import './channelsList.css';

const ChannelsList = props => {
  const handleFocusToChannelsList = (e) => {
    props.handleFocus(e, 'channels-list');
  };

  return (
    <section className="channels-list" tabIndex="0" onKeyDown={handleFocusToChannelsList}>
      <TeamHeader hasFocus={props.hasFocus} />

      <UtilityViewControls hasFocus={props.hasFocus} />

      <Navigation
        channelNames={props.channels.starred}
        headingName={"STARRED"}
        navAriaLabel={"starred channels"}
        hasFocus={props.hasFocus} />

      <Navigation
        channelNames={props.channels.regular}
        headingName={"CHANNELS"}
        navAriaLabel="channels"
        hasFocus={props.hasFocus} />

      <Navigation
        channelNames={props.channels.directMessage}
        headingName={"DIRECT MESSAGES"}
        navAriaLabel="direct messages"
        hasFocus={props.hasFocus} />
    </section>
  );
}

ChannelsList.propTypes = {
  channels: PropTypes.shape({
    regular: PropTypes.arrayOf(PropTypes.string),
    starred: PropTypes.arrayOf(PropTypes.string),
    directMessage: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ChannelsList;
