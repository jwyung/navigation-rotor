import React, { PropTypes } from 'react';
import Button from '../Shared/Button';

const UtilityControls = props => {
  return (
    <div className="utility-controls">
      <Button
        focusLevel={props.focusLevel}
        isNaked={true}
        text="Settings"
      />
      <Button
        focusLevel={props.focusLevel}
        isNaked={true}
        text="Create"
      />
    </div>
  );
}

UtilityControls.propTypes = {
  focusLevel: PropTypes.number.isRequired,
}

export default UtilityControls;
