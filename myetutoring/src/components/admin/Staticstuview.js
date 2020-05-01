import React, { useContext } from 'react';
import Staticstusupported from './Staticstusupported';
//TODO: get data form post provider
import {ContactContext} from '../../providers/Contactprovider';
import { Table } from "evergreen-ui";
import moment from 'moment'

const Staticstuview=()=> {
    
    const contacts=useContext(ContactContext);
    const renderTime = (time)=>{

    var alretTime = Date.now() -  time  
    var amountDays = Math.floor(alretTime/86400000)

      
        return(  
                
                <Table.TextCell>
                    <h8  style={{color:alretTime > 86400000*7    ? 'red':'green'}}> {amountDays} days ago</h8>
                </Table.TextCell>
                
                )
    }
    return (
        <div  >
            <h1 > Students have support</h1>
            <Table style={{width:950,marginLeft:30}}>
                <Table.Head>
                    <Table.TextHeaderCell>
                    StudentID
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    StudentName
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    StudentEmail
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    Studentmobile
                    </Table.TextHeaderCell>
                   
                    <Table.TextHeaderCell>
                    LasiTimeSignIn
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    DaysNoInteraction
                    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={340}>
                    {contacts.map(profile => (
                    <Table.Row key={profile.studentmssv} isSelectable  intent="danger">
                        <Table.TextCell>{profile.studentmssv}</Table.TextCell>
                        <Table.TextCell>{profile.studentname}</Table.TextCell>
                        <Table.TextCell>{profile.studentgmail}</Table.TextCell>
                        <Table.TextCell>{profile.tutorname}</Table.TextCell>
                        <Table.TextCell>
                            { moment(profile.studenttimeinteract).format("DD MMM YYYY hh:mm a")}
                        </Table.TextCell>
                        
                        {renderTime(profile.studenttimeinteract)}
                      

                        {/* <Table.TextCell isNumber>
                        {profile.ltv}
                        </Table.TextCell> */}
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>    
        </div> 
        
    );
    
}

export default Staticstuview;