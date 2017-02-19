import React, { PropTypes } from 'react';
import TeamHeader from './TeamHeader';
import UtilityViewControls from './UtilityViewControls';
import './channelsList.css';

const ChannelsList = props => {
  return (
    <section className="channels-list">
      <TeamHeader />
      <UtilityViewControls />
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
