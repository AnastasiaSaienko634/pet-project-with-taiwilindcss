import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Contact({ handeleDeleteContact, name, number, id }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p>
          <IoPerson className={css.iconPerson} />
          {name}
        </p>
        <p>
          <FaPhone className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button
        onClick={() => handeleDeleteContact(id)}
        className={css.buttonContact}
      >
        Delete
      </button>
    </>
  );
}
