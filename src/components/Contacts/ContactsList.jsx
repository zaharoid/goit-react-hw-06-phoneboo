import { List, TotalCount } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

function ContactsList() {
  const contacts = useSelector(getContacts);
  const filterString = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filterString.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  const contactsCount = contacts.length;

  return (
    <>
      <TotalCount>Total number of contacts: {contactsCount}</TotalCount>
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
}

export default ContactsList;
