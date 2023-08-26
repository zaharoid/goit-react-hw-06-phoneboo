import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from './IconButton.styled';

export default function IconButton({ onClick, children, ...allyProps }) {
  return (
    <Button type="button" onClick={onClick} {...allyProps}>
      {children}
    </Button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
