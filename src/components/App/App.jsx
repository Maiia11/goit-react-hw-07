
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { filteredContacts, selectError, selectLoading } from '../../redux/selectors'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'

function App() {
  const dispatch = useDispatch();
   const contacts = useSelector(filteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
       dispatch(fetchContacts())
  }, [ dispatch])
  
 
  
  return (
    <div>
      
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ContactList contacts={contacts} />
</div>
  )
}

export default App
