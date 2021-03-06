import React, { Component } from 'react';
import Footer from '../components/Footer';
import '../css/Message.css';

import Chatlist from '../components/tutor/Chatlist';
import Chatbox from '../components/Chatbox';

import Contactprovider from '../providers/Contactprovider';

//TODO: To import router react
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Message extends Component {
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
                                    <div className="card p-5">

                                        <div className="messaging">
                                            <div className="inbox_msg">
                                                <Contactprovider>
                                                    <Chatlist />
                                                </Contactprovider>
                                                <Switch>
                                                    <Route path='/chats/:id' component={Chatbox}/>
                                                </Switch>
                                            </div>
                                        </div>
                                    </div>
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

export default Message;