import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = (props) => {
    const { id, name, number, deleteListItem } = props;
    return (
        <li className={css.contactsBlock}>
            <div className={css.contactsItems}>
                <span><FaUser size={11} />
                    <p className={css.contactItem}> {name}</p>
                </span>
                <span><FaPhone size={11} />
                    <p className={css.contactItem}>{number}</p>
                </span>
            </div>
            <button className={css.btnDeleteContact} onClick={() => deleteListItem(id)}>Delete</button>

        </li>

    )
}

export default Contact;
