import React from 'react';
import axios from 'axios';
import './style.css';


const Contact = ({ name, phone, latitude, longitude, id, fetchContacts }) => {
    // console.log(id)
const deleteContact = async () =>{
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/delete/${id}`);
        console.log(response.data);
        await fetchContacts();

      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
};

  return (
    <div key={id} className="contact-card">
      <h2>{name}  </h2> 
      <p>Phone: {phone}</p>
      <p>Address: {latitude}, {longitude}</p>
      <button>Edit </button> <button onClick={deleteContact}>Delete </button>
    </div>
  );
};

export default Contact;
