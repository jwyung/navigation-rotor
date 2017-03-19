import React, { PropTypes } from 'react';
import './messagePane.css';

const MessagePane = props => {
  return (
    <section
    	className="message-pane"
    	role="main"
    	data-component-focusable=""
    	tabIndex="0"
    >
    </section>
  );
}

MessagePane.propTypes = {
};

export default MessagePane;
