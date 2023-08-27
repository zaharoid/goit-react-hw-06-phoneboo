import React from 'react';
import { PropTypes } from 'prop-types';

export default function IconButton({ onClick, children, ...allyProps }) {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
