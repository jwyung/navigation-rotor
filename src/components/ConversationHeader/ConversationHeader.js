import React, { Component, PropTypes } from 'react';
import Button from '../Shared/Button';
import './conversationHeader.css';

export default class ChannelHeader extends Component {
  isSpotlightComponent() {
    return this.props.focus[0] === this.refs['convo-header'];
  }

  getChildFocusLevel() {
    return this.isSpotlightComponent() ? 1 : 0;
  }

  getConvoHeaderAttrs() {
    return {
      className: `convo-header-component${this.isSpotlightComponent() ? ' is-spotlight-component' : ''}`,
      tabIndex: this.props.focusLevel || this.isSpotlightComponent() ? '0' : '-1',
      onKeyDown: this.props.handleFocus
    };
  }

  getInputAttrs() {
    return this.getChildFocusLevel() ? {} : { tabIndex: -1 };
  }

  render() {
    return (
      <section
        data-component-focusable=""
        ref="convo-header"
        {...this.getConvoHeaderAttrs()}
      >
        <Button
          className="favorite-convo-btn"
          focusLevel={this.getChildFocusLevel()}
          isNaked={true}
          ariaLabel="Favorite this conversation"
          text={String.fromCharCode(9829)}
        />
        <h2 className="current-convo">Free food</h2>
        <div className="utility-group">
          <input
            className="search"
            type="text"
            placeholder="Search"
            {...this.getInputAttrs()} />
          <Button
            focusLevel={this.getChildFocusLevel()}
            isNaked={true}
            ariaLabel="Show conversation information"
            text="Info"
          />
        </div>
      </section>
    );
  }
}
