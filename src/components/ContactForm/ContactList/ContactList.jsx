import React from 'react';

import { List, Element, Button } from './ContactList.module';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../store/reducerSlice';

const ContactList = () => {
  const { contacts, filterKey } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const handleDelete = itemId => {
    dispatch(removeContact(itemId));
  };

  function filterArray() {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterKey.toLowerCase());
    });
  }
  const filteredArray = filterArray();
  return (
    <List>
      {filteredArray
        ? filteredArray.map(({ name, number, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button onClick={() => handleDelete(id)} id={id}>
                  Delete
                </Button>
              </Element>
            );
          })
        : contacts.map(({ name, number, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button onClick={() => handleDelete(id)} id={id}>
                  Delete
                </Button>
              </Element>
            );
          })}
    </List>
  );
};

export { ContactList };
