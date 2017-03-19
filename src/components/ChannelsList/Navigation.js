import React, { PropTypes } from 'react';
import ChannelButton from './ChannelButton'

const Navigation = props => {
  const isSpotlightComponent = props.focus === 'channels-list-navigation';
  const childFocusLevel = isSpotlightComponent ? 1 : 0;

  const handleFocus = (e) => {
    e.stopPropagation();
    props.handleFocus(e, 'channels-list-navigation');
  };

  const navigationAttrs = {
    className: `channel-nav${isSpotlightComponent ? ' component--focus' : ''}`,
    tabIndex: props.focusLevel || isSpotlightComponent ? '0' : '-1',
    onKeyDown: handleFocus
  };

  return (
    <section className="channel-nav-section">
      <h3 className="nav-heading">{props.headingName}</h3>
      <nav
        aria-label={props.navAriaLabel}
        data-component-focusable=""
        {...navigationAttrs}
      >
        {props.channelNames.map(function(channelName, index) {
          return <ChannelButton
                   channelName={channelName}
                   key={channelName}
                   focusLevel={childFocusLevel}
                 />
        })}
      </nav>
    </section>
  );
}

Navigation.propTypes = {
  channelNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  headingName: PropTypes.string.isRequired,
  navAriaLabel: PropTypes.string.isRequired,
};

export default Navigation;
