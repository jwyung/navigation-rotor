import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const TeamHeader = props => {
  return (
    <header className="team-header">
      <h1 className="team-name">Hachi</h1>
      <p className="user-name">Hachi Yung</p>
      <Button className="notifications-btn" text="notifications" />
    </header>
  );
}

TeamHeader.propTypes = {
};

export default TeamHeader;
