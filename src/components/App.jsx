import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import "modern-normalize";
import ContactForm from "./ContactForm/ContactForm"
import SearchBox from "./SearchBox/SearchBox"
import ContactList from "./ContactList/ContactList"
import SearchBar from './SearchBar/SearchBar';




const App = () => {
  const [contactList, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactList));
  }, [contactList]);

  const deleteListItem = (itemId) => {
    setContactList(prevState => (
      prevState.filter(item => item.id !== itemId)
    ));

  }

  const onAddNewContact = (contactData) => {
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    setContactList(prevState => [...prevState, finalContact])
  }

  return (
    <div className='mainContainer'>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />
      <SearchBox />
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ContactList
        inputValue={inputValue}
        setInputValue={setInputValue}
        contactList={contactList}
        deleteListItem={deleteListItem}
      />

    </div>)



};

export default App


