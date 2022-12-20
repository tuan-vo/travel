import React, { useState } from 'react';
import css from './Contact.css'
import { useParams } from 'react-router-dom'

import { TbEmphasis } from 'react-icons/tb';
import ContactForm from '../ContactForm/ContactForm';


export default function Contact(props) {
    let { id } = useParams();
    var titleHotel = '';
    // console.log(id);
    
    var titleHotel =()=>{
        if (id != 'vmb') {
            const data = props.data;
            data.forEach(item => {
                if (item.key == id) {
                    titleHotel = item.value.name
                }
    
            })
            return(
                <h2>{titleHotel}</h2>
            )
        }
    }
    return (
        <section className='CSection'>
            <div className="wrap-form">
                <div className="left">
                    <h1>{props.title}</h1>
                    {
                        titleHotel()
                    }
                    <img src={props.img} alt="" />
                </div>
                <ContactForm id={id} />
            </div>
        </section>
    );
}
