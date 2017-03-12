import React, { PropTypes } from 'react';
import InfoControls from './InfoControls';
import CogControls from './CogControls';
import GenericControls from './GenericControls';
import Button from '../Shared/Button';
import './channelHeader.css';

const ChannelHeader = props => {
  const attrs = props.hasFocus ? {} : { tabIndex: -1 };

  return (
    <section className="channel-header" tabIndex="0">
      <div>
        <h2 className="current-channel">
          <Button className="channel-name" text="#placeholder" hasFocus={props.hasFocus} />
        </h2>
        <InfoControls hasFocus={props.hasFocus} />
      </div>
      <div className="utility-group">
        <CogControls hasFocus={props.hasFocus} />
        <input type="text" placeholder="Search" {...attrs} />
        <GenericControls hasFocus={props.hasFocus} />
      </div>
    </section>
  );
}

ChannelHeader.propTypes = {
};

export default ChannelHeader;
