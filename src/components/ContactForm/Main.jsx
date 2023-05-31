import { MdOutlineContactPhone } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';

import { Container, PageTitle, SectionTitle } from './Main.module.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';

import { useSelector } from 'react-redux';

function Phonebook() {
  const { contacts } = useSelector(state => state.phonebook);

  return (
    <Container>
      <PageTitle>
        Phonebook <MdOutlineContactPhone />
      </PageTitle>
      <ContactForm></ContactForm>

      {contacts.length !== 0 ? (
        <>
          <SectionTitle>
            Contacts <FcContacts></FcContacts>
          </SectionTitle>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      ) : (
        false
      )}
    </Container>
  );
}

export { Phonebook };
