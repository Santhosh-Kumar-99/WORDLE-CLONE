import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../App';

export default function Key({ keyVal, bigKey, disabled }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? 'big' : disabled && 'disabled'}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

Key.defaultProps = {
  bigKey: false,
  disabled: false,
};

Key.propTypes = {
  keyVal: PropTypes.string.isRequired,
  bigKey: PropTypes.bool,
  disabled: PropTypes.bool,
};
