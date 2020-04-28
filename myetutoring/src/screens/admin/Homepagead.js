import React, { Component } from 'react';
import Itemcontrolad from '../../components/Itemcontrolad';
import Contactadd from '../../components/admin/Contactadd';
import Contactviewad from '../../components/admin/Contactviewad';
import Footer from '../../components/Footer';
//Model data from providers
import Contactprovider from '../../providers/Contactprovider';


class Homepagead extends Component {
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
                            <Itemcontrolad/>
                        </div>
                    </section>
                    <br></br>
                    <section className="updates no-padding-top">
                        <div className="container-fluid">
                            <div className="row"> 
                                <Contactadd/>
                                <Contactprovider>
                                    <Contactviewad/>
                                </Contactprovider>                             
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Homepagead;