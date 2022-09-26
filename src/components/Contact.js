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
        <div className='slideWrapper'>
            <img src={data.photo} className='poto'/>
            <div className='contactList'>
                {data.name}<br/>
                {data.phone}<br/>
                {data.email}<br/>
            </div>
        </div>
            <div className='line'/>  
    </div>
    );
};

export default Contact;
