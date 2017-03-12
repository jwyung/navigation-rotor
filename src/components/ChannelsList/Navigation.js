import React, { PropTypes } from 'react';
import ChannelButton from './ChannelButton'

const Navigation = props => {
  return (
    <section>
      <h3 className="nav-heading">{props.headingName}</h3>
      <nav className="channel-nav" aria-label={props.navAriaLabel}>
        {props.channelNames.map(function(channelName, index) {
          return <ChannelButton channelName={channelName} key={channelName} hasFocus={props.hasFocus} />
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
