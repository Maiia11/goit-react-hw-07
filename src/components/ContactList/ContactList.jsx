import {  useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { fetchContacts } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts);
  
  useEffect(() => {
    if (contacts !== 0) {
      dispatch(fetchContacts())
    }
  }, [contacts, dispatch])
 
  
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
        </li>))}
    </ul>
  )
}

export default ContactList



// const filter = useSelector(selectFilters);
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
  
//   return (
//       <ul className={css.container}>
//           {filteredContacts.map(({ id, name, number }) => (
//             <li key={id}>
//               <Contact name={name} number={number} id={id} />
            
//           </li>) )}
//     </ul>
//   )
// }