import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';
import * as actions from '../../redux/contacts/contacts-actions';
// import getFilter from '../../redux/contacts/contacts-selectors';
import { contactsSelectors } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className="filterLabel">
      Find contacts by name
      <input
        className="searchInput"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
