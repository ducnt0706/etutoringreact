import React, { useContext,useEffect, useState } from 'react';
//TODO: get data form post provider
import {ContactContext} from '../../providers/Contactprovider';
import {TutorContext} from '../../providers/Tutorprovider';
import { Table } from "evergreen-ui";
import firebase from "firebase";


const Contactviewad=()=> {
const contacts=useContext(ContactContext);

const deleteContact = (id)=>{
    var r = window.confirm("Do you want to delete assign,right ????");
    if(r==true){
        Xoa(id)
    }else{

    }
} 

const Xoa =(id)=>{
    firebase.firestore().collection("contacts").doc(id).delete()
    .then(function() {
        console.log("Document successfully deleted!");
    })
    .then(()=>{
        firebase.firestore().collection("students").doc(id).update({
            "supported":"no"
        })
    })
    .catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

    return (
        <div  >
            <h1 > List Of Assigns</h1>
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
                    TutorName
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    TutorGmail
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    Delete
                    </Table.TextHeaderCell>
                    
                </Table.Head>
                <Table.Body height={340}>
                    {contacts.map(profile => (
                    <Table.Row key={profile.studentmssv} isSelectable  intent="danger">
                        <Table.TextCell>{profile.studentmssv}</Table.TextCell>
                        <Table.TextCell>{profile.studentname}</Table.TextCell>
                        <Table.TextCell>{profile.studentgmail}</Table.TextCell>
                        <Table.TextCell>{profile.tutorname}</Table.TextCell>
                        <Table.TextCell>{profile.tutorgmail}</Table.TextCell>
                        <Table.TextCell>
                            <button onClick={()=>deleteContact(profile.studentgmail)}>delete</button>
                        </Table.TextCell>



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

export default Contactviewad;