// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ContactForm.css'
import { useState } from 'react';


const ContactForm = ({fnDataAdd}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [nama, setNama] = useState('')
    const [phone,setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')

    const submit = (event) => {
      event.preventDefault()
      fnDataAdd(nama,phone,email,photo)
      setNama('')
      setPhone('')
      setEmail('')
      setPhoto('')

    }

    return (
        <div className='page'>
        <form className="containerForm" onSubmit={submit}>
            <TextField className='input'
            value={nama} onChange={(e) => setNama(e.target.value)}
          required
          id="filled-required"
          label="Name"
          placeholder='Nama Lengkap'
          variant="filled"
        />
        <TextField
        className='input'
        value={phone} onChange={(e) => setPhone(e.target.value)}
          required
          id="filled-required"
          label="Phone"
          placeholder='No Handphone'
          variant="filled"
        />
        <TextField
        className='input'
        value={email} onChange={(e) => setEmail(e.target.value)}
          required
          id="filled-required"
          label="Email"
          placeholder='Email Anda'
          variant="filled"
        />
        <TextField
        className='input'
          required
          value={photo} onChange={(e) => setPhoto(e.target.value)}
          id="filled-required"
          label="Photo URL"
        placeholder='masukan foto'
          variant="filled"
        />
        <div className='buttonContact'>
        <Button color='success' type='submit'  className='buttonContact'>ADD NEW</Button>
        </div>
        </form>
        </div>
    );
}

export default ContactForm;