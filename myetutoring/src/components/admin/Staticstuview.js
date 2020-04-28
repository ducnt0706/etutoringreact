import React, { useContext } from 'react';
import Staticstusupported from './Staticstusupported';
//TODO: get data form post provider
import {ContactContext} from '../../providers/Contactprovider';


const Staticstuview=()=> {
    
    const contacts=useContext(ContactContext);

    return (
        <div className="container-fluid">
            <div className="row">
                {contacts.map(contact => <Staticstusupported {...contact} key={contact.id} />)}
            </div>      
        </div>
        
    );
    
}

export default Staticstuview;