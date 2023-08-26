import PropTypes from 'prop-types';

import { List, Item, TotalCount, ContactInfo } from './ContactsList.styled';
import IconButton from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

function ContactsList({ contacts, removeContact, contactsCount }) {
  return (
    <>
      <TotalCount>Total number of contacts: {contactsCount}</TotalCount>
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactInfo>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
              </ContactInfo>

              <IconButton type="button" onClick={() => removeContact(id)}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </Item>
          );
        })}
      </List>
    </>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contactsCount: PropTypes.number.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired,
};
