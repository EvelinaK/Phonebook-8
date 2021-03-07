import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactList from '../components/ContactList/contactList.container';
import Form from '../components/Form/form';
import Filter from '../components/Filter/filter';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import { operations } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  // const fetchContacts = () => dispatch(operations.fetchContacts());

  useEffect(() => {
    console.log('useEffect');
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>

      {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton> */}

      {/* {this.props.isLoadingTodos && <h1>Загружаем...</h1>} */}

      <ContactList />

      {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )} */}
    </Container>
  );
}
