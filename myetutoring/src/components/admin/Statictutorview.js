import React, { useContext } from 'react';
import Statictutor from './Statictutor';
//TODO: get data form post provider
import {ContactContext} from '../../providers/Contactprovider';


const Statictutorview=()=> {
    
    const contacts=useContext(ContactContext);

    return (
        <div className="container-fluid">
            <div className="row">
                {contacts.map(contact => <Statictutor {...contact} key={contact.id} />)}
            </div>      
        </div>
        
    );
    
}

export default Statictutorview;