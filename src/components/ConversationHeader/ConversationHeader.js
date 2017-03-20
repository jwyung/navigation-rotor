import React, { PropTypes } from 'react';
import InfoControls from './InfoControls';
import CogControls from './CogControls';
import GenericControls from './GenericControls';
import Button from '../Shared/Button';
import './conversationHeader.css';

const ChannelHeader = props => {
  const attrs = props.hasFocus ? {} : { tabIndex: -1 };

  const handleFocusToChannelHeader = (e) => {
    props.handleFocus(e, 'channel-header');
  };

  return (
    <section
      className={`channel-header${props.hasFocus ? ' component--focus' : ''}`}
      data-component-focusable=""
      tabIndex="0"
      onKeyDown={handleFocusToChannelHeader}
    >
      <div>
        <h2 className="current-channel">
          <Button className="channel-name" text="#free-food" hasFocus={props.hasFocus} isNaked={true} />
        </h2>
        <InfoControls hasFocus={props.hasFocus} />
      </div>
      <div className="utility-group">
        <CogControls hasFocus={props.hasFocus} />
        <input className="search" type="text" placeholder="Search" {...attrs} />
        <GenericControls hasFocus={props.hasFocus} />
      </div>
    </section>
  );
}

ChannelHeader.propTypes = {
};

export default ChannelHeader;