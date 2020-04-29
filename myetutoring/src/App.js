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
//import {TutorContext} from './providers/Tutorprovider';

//REGION: App component
const App = ()=> {
    const {user}= useContext(UserContext);
    //const tutors=useContext(TutorContext);

    //if(loading) return null;
    
    // const isTutor=(gmail)=>{
    //   tutors.forEach(tutor=> {
    //     if(tutor.tutorgmail===gmail){
    //       return true;
    //     }
    //   });
    //   return false;     
    // }

    if(user!=null){
      if(user.email==="ducntgch17377@fpt.edu.vn"){
        return <Tutorroute/>
      }else if(user.email==="ducnt0706@gmail.com"){
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

