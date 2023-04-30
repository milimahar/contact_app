import React from 'react'
import { Link } from 'react-router-dom';
import './ContactStyle.css';

 const Contact = () => {
  return (
    <div>
     <h2> Contact    </h2>   
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

                    
       <div className='create_contact_Screen'>
       <div>  <h1>Create Contact Screen</h1>  </div> 
                     <div className='contact_form'>
                          <form>
                          <label>First Name:
                          <input type="text" />
                          </label>
                          <br/>
                         <label>Last Name:
                         <input type="text" />
                       </label>
                        </form>
                 </div >
      
      <br/>

         <div className='status'>
                   <div> <p> Status :  </p> </div>
                   <div>
                           <input type="radio" id="active" name="sts" value="ACTIVE"/>
                           <label for="active">Active</label><br/>
                          <input type="radio" id="inactive" name="sts" value="INACTIVE"/>
                          <label for="inactive">Inactive</label>
                    </div>
          </div>
          
        </div>
           
        
      </div>
<div className='save_contact'>
Save Contact
</div>
     


    </div>
 </div>
  )
}
export  default Contact;
