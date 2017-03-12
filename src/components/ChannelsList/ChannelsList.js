import React, { PropTypes } from 'react';
import TeamHeader from './TeamHeader';
import UtilityViewControls from './UtilityViewControls';
import Navigation from './Navigation';
import './channelsList.css';

const ChannelsList = props => {
  return (
    <section className="channels-list" tabIndex="0">
      <TeamHeader />

      <UtilityViewControls />

      <Navigation
        channelNames={props.channels.starred}
        headingName={"STARRED"}
        navAriaLabel={"starred channels"} />

      <Navigation
        channelNames={props.channels.regular}
        headingName={"CHANNELS"}
        navAriaLabel="channels" />

      <Navigation
        channelNames={props.channels.directMessage}
        headingName={"DIRECT MESSAGES"}
        navAriaLabel="direct messages" />
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
