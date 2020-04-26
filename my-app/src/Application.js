import React, { Component,useContext } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// import bootstrap library
import 'font-awesome/css/font-awesome.min.css';// import fontawesome icons library
import './js/front.js';
import './css/Homepage.css';
import './css/fontastic.css';
//TODO: To import router react
import {BrowserRouter, Switch,Route} from 'react-router-dom';

//TODO: To import component
import Navbar from './nav/Navbar';
import Sidebar from './nav/Sidebar';
import Login from './screens/Login';
import Homepage from './screens/Homepage';
import Contact from './screens/Contact';
import Message from './screens/Message';

//TODO: to import Usercontext
import {UserContext} from './providers/Userprovider'

//REGION: App component
const Application = ()=> {
    const user= useContext(UserContext);

    if(user && user.uid=="EYjCZIaYnIemSOjOGPONPBIFM2g1"){
      return ( 
          <BrowserRouter>
          <div>
              <Navbar/>
              <div className="page-content d-flex align-items-stretch">
              <Sidebar role="Tutor" name={user.displayName} photoUrl={user.photoURL}/>
                  <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/message' component={Message}/>
                  </Switch>
              </div>
          </div>
          </BrowserRouter>
      );
    }else{
      return (
        <div>
          <Login/>
        </div>
      );
    }
}

export default Application;
