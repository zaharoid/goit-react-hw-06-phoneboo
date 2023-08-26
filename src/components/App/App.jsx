import { useState, useEffect } from 'react';
import Phonebook from '../Phonebook';
import ContactsList from '../Contacts';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { Title1, Title2 } from './App.styled';
import { ReactComponent as AddIcon } from '../../icons/Add.svg';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addContact = contact => {
    setContacts(contacts => [...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = id => {
    setContacts(contacts => contacts.filter(contact => id !== contact.id));
  };

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const countOfContacts = contacts.length;
  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Title1>Phonebook</Title1>
      <IconButton onClick={toggleModal} aria-label="open modal">
        <AddIcon fill="#fff"></AddIcon>
      </IconButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <h2>Add contact</h2>
          <Phonebook
            getContact={addContact}
            contacts={contacts}
            onCloseModal={toggleModal}
          />
          <button type="button" onClick={toggleModal}>
            CLOSE
          </button>
        </Modal>
      )}

      <Title2>Contacts</Title2>
      <Filter filterValue={filter} onChangeMethod={onChangeFilter} />
      <ContactsList
        contactsCount={countOfContacts}
        contacts={filteredContacts}
        removeContact={removeContact}
      />
    </>
  );
}

export default App;
