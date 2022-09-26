import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import dataContacts from './data/contacts.json'

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [dataKontak, setDataKontak] = useState(dataContacts)
  const addData = (newNama,newHp,newEmail,newPhoto) => {
    const objContact = {
      name:newNama,
      phone:newHp,
      email:newEmail,
      photo:newPhoto
    }

    
    const newContact = [...dataKontak, objContact];
    console.log('new Contact ', newContact)
    setDataKontak(newContact)
  }
  
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div>
          <ContactForm fnDataAdd={addData}/>
        </div>
        <div>
          {dataKontak.map((contact,index) => (
              <Contact data={contact} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
