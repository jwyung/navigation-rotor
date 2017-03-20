import React, { Component, PropTypes } from 'react';
import ChatHeader from './ChatHeader';
import UtilityControls from './UtilityControls';
import Navigation from './Navigation';
import './conversationsList.css';

export default class ConversationsList extends Component {
  isSpotlightComponent() {
    return this.props.focus[0] === this.refs['convo-list'];
  }

  getChildFocusLevel() {
    return this.isSpotlightComponent() ? 1 : 0;
  }

  getConvoListAttrs() {
    return {
      className: `convo-list-component${this.isSpotlightComponent() ? ' is-spotlight-component' : ''}`,
      tabIndex: this.props.focusLevel || this.isSpotlightComponent() ? '0' : '-1',
      onKeyDown: this.props.handleFocus
    };
  }

  render() {
    return (
        <section
          data-component-focusable=""
          ref="convo-list"
          {...this.getConvoListAttrs()}
        >
          <ChatHeader />

          <div className="scrollable">
            <UtilityControls focusLevel={this.getChildFocusLevel()} />

            <Navigation
              conversations={this.props.conversationsList.favorites}
              headingName={"FAVORITES"}
              navAriaLabel={"favorite conversations"}
              focus={this.props.focus}
              focusLevel={this.getChildFocusLevel()}
              handleFocus={this.props.handleFocus}
            />

            <Navigation
              conversations={this.props.conversationsList.regular}
              headingName={"CONVERSATIONS"}
              navAriaLabel="conversations"
              focus={this.props.focus}
              focusLevel={this.getChildFocusLevel()}
              handleFocus={this.props.handleFocus}
            />
          </div>
        </section>
      );
  }
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
