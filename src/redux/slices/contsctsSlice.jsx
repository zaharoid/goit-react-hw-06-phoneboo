import shortid from 'shortid';
const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: shortid.generate(),
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(({ id }) => action.payload !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
