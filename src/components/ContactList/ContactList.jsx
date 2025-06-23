import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactList, handeleDeleteContact }) {
  return (
    <>
      <ul className={css.listContact}>
        {contactList.map((el) => (
          <li key={el.id} className={css.boxContact}>
            <Contact
              handeleDeleteContact={handeleDeleteContact}
              name={el.name}
              number={el.number}
              id={el.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
