import React, { PropTypes } from 'react';
import TeamHeader from './TeamHeader';
import UtilityViewControls from './UtilityViewControls';
import Navigation from './Navigation';
import './channelsList.css';

const ChannelsList = props => {
  const isSpotlightComponent = props.focus === 'channels-list';
  const childFocusLevel = isSpotlightComponent ? 1 : 0;

  const handleFocus = (e) => {
    e.stopPropagation();
    props.handleFocus(e, 'channels-list');
  };

  const channelsListAttrs = {
    className: `channels-list${isSpotlightComponent ? ' component--focus' : ''}`,
    tabIndex: props.focusLevel || isSpotlightComponent ? '0' : '-1',
    onKeyDown: handleFocus
  };

  return (
    <section
      data-component-focusable=""
      {...channelsListAttrs}
    >
      <TeamHeader />

      <UtilityViewControls focusLevel={childFocusLevel} />

      <Navigation
        channelNames={props.channels.starred}
        headingName={"STARRED"}
        navAriaLabel={"starred channels"}
        focus={props.focus}
        focusLevel={childFocusLevel}
        handleFocus={props.handleFocus}
      />

      <Navigation
        channelNames={props.channels.regular}
        headingName={"CHANNELS"}
        navAriaLabel="channels"
        focus={props.focus}
        focusLevel={childFocusLevel}
        handleFocus={props.handleFocus}
      />

      <Navigation
        channelNames={props.channels.directMessage}
        headingName={"DIRECT MESSAGES"}
        navAriaLabel="direct messages"
        focus={props.focus}
        focusLevel={childFocusLevel}
        handleFocus={props.handleFocus}
      />
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
