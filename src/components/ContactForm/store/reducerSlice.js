import { initialState } from './initialState';
import { combineReducers, createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: initialState.phonebook,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContact: (state, action) => {
      state.filterKey = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const reducer = combineReducers({
  phonebook: contactsReducer,
});
