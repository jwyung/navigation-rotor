import React, { PropTypes } from 'react';
import './sidebar.css';

const Sidebar = props => {
  return (
    <section
    	className="sidebar"
    	role="complementary"
    	data-component-focusable=""
    	tabIndex="0"
    >
    </section>
  );
}

Sidebar.propTypes = {
};

export default Sidebar;
