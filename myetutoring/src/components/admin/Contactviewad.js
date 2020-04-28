import React, { useContext } from 'react';
import Contactad from './Contactad';
//TODO: get data form post provider
import {ContactContext} from '../../providers/Contactprovider';


const Contactviewad=()=> {
    
    const contacts=useContext(ContactContext);

    return (
        <div className="container-fluid">
            <div className="row">
                {contacts.map(contact => <Contactad {...contact} key={contact.id} />)}
            </div>
            
        </div> 
    );
    
}

export default Contactviewad;