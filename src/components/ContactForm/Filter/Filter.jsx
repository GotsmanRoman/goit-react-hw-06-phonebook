import React from 'react';

import { Title, Input, Container } from './Filter.module';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { filterContact } from '../store/reducerSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <Container>
      <Title>
        Find Contacts by name <AiOutlineSearch />
        <Input onChange={event => handleFilter(event)}></Input>
      </Title>
    </Container>
  );
};

export { Filter };
