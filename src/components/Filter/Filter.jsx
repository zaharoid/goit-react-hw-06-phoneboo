import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './Filter.styled';

function Filter({ filterValue, onChangeMethod }) {
  return (
    <Label>
      Find contact
      <Input type="text" value={filterValue} onChange={onChangeMethod} />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeMethod: PropTypes.func.isRequired,
};
