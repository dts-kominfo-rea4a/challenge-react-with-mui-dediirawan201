// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import './Contact.css'
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <div className='containerContact'>
        {data.map(contact => {
            return (
                <>
        <div className='slideWrapper'>
            <img src={contact.photo} className='poto'/>
            <div className='contactList'>
                {contact.name}<br/>
                {contact.phone}<br/>
                {contact.email}<br/>
            </div>
        </div>
            <div className='line'/>
            </>
            )
        })}
       
    </div>
    );
};

export default Contact;
