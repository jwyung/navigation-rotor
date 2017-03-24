import React, { PropTypes } from 'react';
import Button from '../Shared/Button';
import './conversationHeader.css';

const ChannelHeader = props => {
  const attrs = props.hasFocus ? {} : { tabIndex: -1 };

  const handleFocusToChannelHeader = (e) => {
    props.handleFocus(e, 'channel-header');
  };

  return (
    <section
      className={`convo-header${props.hasFocus ? ' component--focus' : ''}`}
      data-component-focusable=""
      tabIndex="0"
      onKeyDown={handleFocusToChannelHeader}
    >
      <Button
        className="favorite-convo-btn"
        hasFocus={props.hasFocus}
        isNaked={true}
        ariaLabel="Favorite this conversation"
        text={String.fromCharCode(9829)}
      />
      <h2 className="current-convo">Free food</h2>
      <div className="utility-group">
        <input className="search" type="text" placeholder="Search" {...attrs} />
        <Button
          hasFocus={props.hasFocus}
          isNaked={true}
          ariaLabel="Show conversation information"
          text="Info"
        />
      </div>
    </section>
  );
}

ChannelHeader.propTypes = {
};

export default ChannelHeader;
