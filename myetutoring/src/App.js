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

//TODO: to import Usercontext
import {UserContext} from './providers/Userprovider'

//REGION: App component
const App = ()=> {
    const {user,loaded}= useContext(UserContext);

    if(!loaded) return null;

    if(user!=null){
      return <Tutorroute/>
    }else{
      return (
        <div>
          <Login/>
        </div>
      );
    }
}

export default App;

