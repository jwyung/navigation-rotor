import React, { PropTypes } from 'react';
import TeamHeader from './TeamHeader';
import './channelsList.css';

const ChannelsList = props => {
  return (
    <section className="channels-list">
      <TeamHeader />
    </section>
  );
}

ChannelsList.propTypes = {
  channels: PropTypes.object.isRequired,
  channels: PropTypes.shape({
    regular: PropTypes.arrayOf(PropTypes.string),
    starred: PropTypes.arrayOf(PropTypes.string),
    directMessage: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ChannelsList;
