import React, { Component } from 'react';
import Footer from '../components/Footer';
import '../css/Message.css';

import Chatbox from '../components/Chatbox';

//TODO: To import router react
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Messagestu extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content-inner color-gradient-grey">
                    <header className="page-header">
                        <div className="container-fluid">
                            <h2 className="no-margin-bottom">Message</h2>
                        </div>
                    </header>

                    <div>
                        <section className="dashboard-counts no-padding-bottom ">
                            <div className="container-fluid">

                                <div className="row">
                                    <Switch>
                                        <Route path='/chats/:id' component={Chatbox}/>
                                    </Switch>                                        
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default Messagestu;