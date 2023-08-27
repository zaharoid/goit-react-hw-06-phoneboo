import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors/selectors';

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    console.log(e.currentTarget.value);
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contact
      <Input type="text" value={filter} onChange={onChangeFilter} />
    </Label>
  );
}

export default Filter;
