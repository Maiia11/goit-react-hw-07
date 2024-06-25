
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { filteredContacts, selectContacts, selectError, selectLoading } from '../../redux/selectors'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps.js'

function App() {
  const dispatch = useDispatch()
  
  const filterContacts = useSelector(filteredContacts);
  console.log(filterContacts);


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
      <ContactList contacts={filterContacts} />
</div>
  )
}

export default App
