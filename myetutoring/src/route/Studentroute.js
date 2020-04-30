import React, { useContext } from 'react';
//TODO: Screens
import Navbar from '../nav/Navbar';
import Sidebarstu from '../nav/Sidebarstu';
import Homepagestu from '../screens/Homepagestu';
import Contactstu from '../screens/Contactstu';
import Messagestu from '../screens/Messagestu';
//TODO: To import router react
import {BrowserRouter, Switch,Route} from 'react-router-dom';
//TODO: to import Usercontext
import {UserContext} from '../providers/Userprovider';
import Postpage from '../components/tutor/Postpage';

const Studentroute=()=>  {
    const {user}= useContext(UserContext);
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <div className="page-content d-flex align-items-stretch">
                        <Sidebarstu role="Student" name={user.displayName} photoUrl={user.photoURL} />
                        <Switch>
                            <Route exact path='/' component={Homepagestu} />
                            <Route path='/contact' component={Contactstu} />
                            <Route path='/chats/:id' component={Messagestu}/>
                            <Route path='/posts/:id' component={Postpage}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    
}

export default Studentroute;