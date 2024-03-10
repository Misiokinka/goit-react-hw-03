
import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contactList, inputValue, deleteListItem }) => {
  return (
    <ul className={css.listContacts}>
      {contactList.filter((item) => item.name.includes(inputValue)).map((item) => {
        return <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deleteListItem={deleteListItem} />
      })}
    </ul>



  )
}

export default ContactList