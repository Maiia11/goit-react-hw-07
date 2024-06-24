import {  useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { getContacts, getFilters } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
      <ul className={css.container}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            
          </li>) )}
    </ul>
  )
}

export default ContactList