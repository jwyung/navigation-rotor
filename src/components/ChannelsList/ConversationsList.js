import React, { PropTypes } from 'react';
import ChatHeader from './ChatHeader';
import UtilityControls from './UtilityControls';
import Navigation from './Navigation';
import './conversationsList.css';

const ConversationsList = props => {
  const isSpotlightComponent = props.focus === 'convo-list';
  const childFocusLevel = isSpotlightComponent ? 1 : 0;

  const handleFocus = (e) => {
    e.stopPropagation();
    props.handleFocus(e, 'convo-list');
  };

  const channelsListAttrs = {
    className: `convo-list-component${isSpotlightComponent ? ' component--focus' : ''}`,
    tabIndex: props.focusLevel || isSpotlightComponent ? '0' : '-1',
    onKeyDown: handleFocus
  };

  return (
    <section
      data-component-focusable=""
      {...channelsListAttrs}
    >
      <ChatHeader />

      <div className="scrollable">
        <UtilityControls focusLevel={childFocusLevel} />

        <Navigation
          conversations={props.conversationsList.favorites}
          headingName={"FAVORITES"}
          navAriaLabel={"starred channels"}
          focus={props.focus}
          focusLevel={childFocusLevel}
          handleFocus={props.handleFocus}
        />

        <Navigation
          conversations={props.conversationsList.regular}
          headingName={"CONVERSATIONS"}
          navAriaLabel="channels"
          focus={props.focus}
          focusLevel={childFocusLevel}
          handleFocus={props.handleFocus}
        />
      </div>
    </section>
  );
}

ConversationsList.propTypes = {
  conversationsList: PropTypes.shape({
    regular: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })),
    starred: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default ConversationsList;
