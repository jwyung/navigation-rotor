import React, { Component, PropTypes } from 'react';
import ConversationButton from './ConversationButton'

export default class Navigation extends Component {
  isSpotlightComponent() {
    return this.props.focus[0] === this.refs[`convo-list-nav-${this.props.headingName}`];
  }

  getChildFocusLevel() {
    return this.isSpotlightComponent() ? 1 : 0;
  }

  getNavigationAttrs() {
    return {
      className: `convo-nav${this.isSpotlightComponent() ? ' is-spotlight-component' : ''}`,
      tabIndex: this.props.focusLevel || this.isSpotlightComponent() ? '0' : '-1',
      onKeyDown: this.props.handleFocus
  }
  }

  render() {
    return (
      <section className="convo-nav-section">
        <h3 className="nav-heading">{this.props.headingName}</h3>
        <nav
          aria-label={this.props.navAriaLabel}
          data-component-focusable=""
          ref={`convo-list-nav-${this.props.headingName}`}
          {...this.getNavigationAttrs()}
        >
          <ul className="conversation-list">
            {this.props.conversations.map((conversation, index) => {
              return <ConversationButton
                       name={conversation.name}
                       time={conversation.time}
                       key={index}
                       focusLevel={this.getChildFocusLevel()}
                     />
            })}
          </ul>
        </nav>
      </section>
    );
  }
}

Navigation.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })).isRequired,
  headingName: PropTypes.string.isRequired,
  navAriaLabel: PropTypes.string.isRequired,
};
