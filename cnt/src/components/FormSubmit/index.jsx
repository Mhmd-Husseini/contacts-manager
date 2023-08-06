import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const FormSubmit = ({fetchContacts}) => {

    const [newContact, setNewContact] = useState({name: '', phone: '',latitude: '',  longitude: ''});

    const handleInputChange = (event) => {
      let name= event.target.name;
      let value= event.target.value;
      setNewContact((prevContact) => ({ ...prevContact, [name]: value, }));
    };
  
    const handleAddContact = async () => {
      if (newContact.name && newContact.phone) {
        try {
          const response = await axios.post('http://localhost:8000/api/add', newContact);
          if (response.status === 200) {
            setNewContact({ name: '', phone: '',  latitude: '', longitude: ''  });
            await fetchContacts();
          }
        } catch (error) {
          console.error('Error adding contact:', error);
        }
      }};
  return (
    <div>
        <input type="text" name="name" value={newContact.name} placeholder="Name" onChange={handleInputChange}/>
        <input type="text" name="phone" value={newContact.phone} placeholder="Phone" onChange={handleInputChange}/>
        <input type="text" name="latitude" value={newContact.latitude} placeholder="Latitude"onChange={handleInputChange}/>
        <input type="text" name="longitude" value={newContact.longitude} placeholder="Longitude" onChange={handleInputChange}/>
        <button onClick={handleAddContact}>Add Contact</button>
    </div>  
  )
}

export default FormSubmit