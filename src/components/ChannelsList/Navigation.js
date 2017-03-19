import React, { PropTypes } from 'react';
import ConversationButton from './ConversationButton'

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
        <ul className="conversation-list">
          {props.conversations.map(function(conversation, index) {
            return <ConversationButton
                     name={conversation.name}
                     time={conversation.time}
                     key={index}
                     focusLevel={childFocusLevel}
                   />
          })}
        </ul>
      </nav>
    </section>
  );
}

Navigation.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })).isRequired,
  headingName: PropTypes.string.isRequired,
  navAriaLabel: PropTypes.string.isRequired,
};

export default Navigation;
