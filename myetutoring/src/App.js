import React, {useContext } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// import bootstrap library
import 'font-awesome/css/font-awesome.min.css';// import fontawesome icons library
import './js/front.js';
import './css/Homepage.css';
import './css/fontastic.css';
//TODO: To import component
import Login from './screens/Login';
import Tutorroute from './route/Tutorroute';
import Studentroute from './route/Studentroute';
import Adminroute from './route/Adminroute';
//TODO: to import Usercontext
import {UserContext} from './providers/Userprovider'
import {TutorContext} from './providers/Tutorprovider';
import {StudentContext} from './providers/Studentprovider';
//REGION: firestore
import{firestore} from './firebaseconfig';


const App = ()=> {
    const {user}= useContext(UserContext);
    const {tutors} =useContext(TutorContext);
    const {students}=useContext(StudentContext);
    //if(loading) return null;
  

    if(user!=null){
      var listTutormail=tutors.map(x=>x.tutorgmail);
      var listStudentmail=students.map(x=>x.studentgmail);

      if(listTutormail.includes(user.email)===true){
        return <Tutorroute/>
      }else if(listStudentmail.includes(user.email)===true){
        //let docRef=firestore.collection('contacts').where('studentgmail',"==",user.email).get();
        //console.log(docRef);
        // docRef.update({
        //   studenttimeinteract:new Date(),
        // });
        return <Studentroute/>
      }else if(user.email==="toanpvgch17585@fpt.edu.vn"){
        return <Adminroute/>
      }
      else{
        return <Login/>
      }
    }else{
      return <Login/>
    }
}

export default App;

