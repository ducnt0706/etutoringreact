import React, { Component } from 'react';
import Itemcontrol from './Itemcontrol';
import Postview from './Postview';
import Meetingview from './Meetingview';
import Footer from './Footer';

class Homepage extends Component {
    render() {
        return (
            <div className="content-inner color-gradient-grey">
                <header className="page-header">
                    <div className="container-fluid">
                        <h2 className="no-margin-bottom">Dashboard</h2>
                    </div>
                </header>
                <div>
                    <section className="dashboard-counts no-padding-bottom ">
                        <div className="container-fluid">
                            <Itemcontrol/>
                        </div>
                    </section>
                    <br></br>
                    <section className="updates no-padding-top">
                        <div className="container-fluid">
                            <div className="row">
                                <Postview/>
                                <Meetingview/>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;