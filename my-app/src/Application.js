import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// import bootstrap library
import 'font-awesome/css/font-awesome.min.css';// import fontawesome icons library
import './js/front.js';
import './css/Homepage.css';
import './css/fontastic.css';
//TODO: To import router react
import {BrowserRouter, Switch,Route} from 'react-router-dom';
//TODO: to import firebase
import { fireauth } from './firebaseconfig';
//TODO: To import component
import Navbar from './nav/Navbar';
import Sidebar from './nav/Sidebar';
import Login from './screens/Login';
import Homepage from './screens/Homepage';
import Contact from './screens/Contact';
import Message from './screens/Message';

//Model data from providers
import Postprovider from './providers/Postprovider';

//REGION: App component
class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  authListener = () => {
    fireauth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
        //console.log(user.displayName);
    } else {
        this.setState({user:null});
        //console.log(user);
      }
    });
  }

  componentDidMount = () => {
    this.authListener();
  }

  render() { 
    if(this.state.user){
      return ( 
            <Postprovider>
                <BrowserRouter>
                <div>
                    <Navbar/>
                    <div className="page-content d-flex align-items-stretch">
                    <Sidebar role="Tutor" name={this.state.user.displayName} photoUrl={this.state.user.photoURL}/>
                        <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/message' component={Message}/>
                        </Switch>
                    </div>
                </div>
                </BrowserRouter>
            </Postprovider>
      );
    }else{
      return (
        <div>
          <Login/>
        </div>
      );
    }
  }
}

export default Application;
