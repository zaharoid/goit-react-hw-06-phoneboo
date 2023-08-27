import { useState } from 'react';
import { FormWrapper, Label, Input, Button } from './Phonebook.styled';
import { addContact } from 'redux/slices/contsctsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors/selectors';
import { Notify } from 'notiflix';

function Phonebook({ onCloseModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name) {
        onCloseModal();
        reset();

        return Notify.warning(`${name} is already exist`);
      }
    }
    dispatch(addContact(name, number));

    reset();
    onCloseModal();
  };
  const state = useSelector(state => state.contacts);

  return (
    <form onSubmit={onSubmit}>
      <FormWrapper>
        <Label>
          <span>Name</span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <span>Contacts</span>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormWrapper>
    </form>
  );
}

export default Phonebook;

// Phonebook.propTypes = {
//   getContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
