import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const ConversationButton = props => {
  return (
    <li className="conversation-list-item">
      <Button className="convo-list-btn" text={props.name} focusLevel={props.focusLevel} isNaked={true} />
      <p className="conversation-list-time">{props.time}</p>
    </li>
  );
}

ConversationButton.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ConversationButton;
