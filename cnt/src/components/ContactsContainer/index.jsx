import React from 'react';
import Contact from '../Contact';
import './style.css';


const ContactsContainer = ({contacts, fetchContacts}) => {
  return (
    <div >
      <div className="contacts-list">

        {contacts.map((contact) => (
            <Contact fetchContacts={fetchContacts} key={contact.id} id={contact.id} name={contact.name} phone={contact.phone} latitude={contact.latitude} longitude={contact.longitude} />
        ))}
      </div>
    </div>
  );
};

export default ContactsContainer;
