import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Section, TitleH1, TitleH2 } from './App.styled';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'client1', number: '38330344' },
    { id: 'id-2', name: 'cient2', number: '038493303' },
    { id: 'id-3', name: 'client3', number: '645173379' },
    
  ]);

  const [filter, setFilter] = useState('');
 

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);

    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
    const findName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    };
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };    

    function deleteContact(contactId) {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId)
    );
  }

   const handleFilter = e => {
    setFilter(e.currentTarget.value);
   };
  
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    const visibleContacts = filterContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <TitleH1>Phonebook</TitleH1>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <TitleH2>Contacts</TitleH2>
          <Filter value={filter} onChange={handleFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    );
};

export default App;