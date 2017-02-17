import React, { PropTypes } from 'react';

const TeamHeader = props => {
  return (
    <header className="team-header">
      <h1 className="team-name">Hachi</h1>
      <p className="user-name">Hachi Yung</p>
      <button className="notifications-btn" type="button">notifications</button>
    </header>
  );
}

TeamHeader.propTypes = {
};

export default TeamHeader;
