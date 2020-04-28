import React, { useContext } from 'react';
//TODO: Screens
import Navbar from '../nav/Navbar';
import Sidebarad from '../nav/admin/Sidebarad';
import Homepagead from '../screens/admin/Homepagead';
import Staticstu from '../screens/admin/Staticstu';
import Statictutor from '../screens/admin/Statictutor';
//TODO: To import router react
import {BrowserRouter, Switch,Route} from 'react-router-dom';
//TODO: to import Usercontext
import {UserContext} from '../providers/Userprovider';

const Tutorroute=()=>  {
    const {user}= useContext(UserContext);
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <div className="page-content d-flex align-items-stretch">
                        <Sidebarad role="Admin" name={user.displayName} photoUrl={user.photoURL} />
                        <Switch>
                            <Route exact path='/' component={Homepagead} />
                            <Route path='/staticstudent' component={Staticstu} />
                            <Route path='/statictutor' component={Statictutor} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    
}

export default Tutorroute;