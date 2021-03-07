import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { operations, contactsSelectors } from '../../redux/contacts';
import ContactList from './contactList';

const mapStateToProps = state => ({
  items: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
