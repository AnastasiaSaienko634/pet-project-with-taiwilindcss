import css from "./App.module.css";
import { Formik } from "formik";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("save-contacts");

    if (!savedContacts) {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
    return JSON.parse(savedContacts);
  });

  useEffect(() => {
    window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handelContactFrom = (values, actions) => {
    const newUser = { ...values, id: nanoid() };
    setContact((prev) => [...contacts, newUser]);
    actions.resetForm();
  };
  const handeleDeleteContact = (contactId) => {
    setContact((prevId) => {
      // prevId - это массив, который содержит текущие иды
      return prevId.filter((contacts) => contacts.id !== contactId);
    });
  };

  const [searchContact, setSearchContact] = useState("");
  const visiableContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handelContactFrom={handelContactFrom} />
        <SearchBox
          searchContact={searchContact}
          setSearchContact={setSearchContact}
        />
        <ContactList
          contactList={visiableContact}
          handeleDeleteContact={handeleDeleteContact}
        />
      </div>
    </>
  );
}
