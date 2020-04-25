import React, { Component } from 'react';
import Itemcontrol from '../components/Itemcontrol';
import Postview from '../components/Postview';
import Meetingview from '../components/Meetingview';
import Meetings from '../components/Meetings';
import Footer from '../components/Footer';

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
                                <Meetings/>
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