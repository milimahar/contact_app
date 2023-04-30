import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Contact  from './Contact';
import  {Link } from "react-router-dom";
import './ContactPageStyle.css'

export const ContactPage = () => {
  return (
    <div className='main_page'>
         <h1 className='cp'>Contact Page</h1>
      <div className='main'>
    
          

       <div className='contact_page'>
               
                 <Link to="/contact">Contact</Link>
                 <br/>
               <Link to ='/charts'>Charts <br/>
                                and Maps
                                </Link>
              <h5>Sidebar</h5>                  
             
       </div>


       <div className='create_contact'>
           <h3>Create Contact</h3>
           <h4>No Contact Found Please add contact from Create Contact Button</h4>
       </div>

      </div>




    </div>
  )
}
