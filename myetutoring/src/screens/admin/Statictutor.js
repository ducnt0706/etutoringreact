import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Statictutorview from '../../components/admin/Statictutorview';
import Contactprovider from '../../providers/Contactprovider';

class Statictutor extends Component {
    render() {
        return (
            <div className="content-inner color-gradient-grey">
                <header className="page-header">
                    <div className="container-fluid">
                        <h2 className="no-margin-bottom">Contact</h2>
                    </div>
                </header>
                <div>
                    <section className="dashboard-counts no-padding-bottom ">
                        <Contactprovider>
                            <Statictutorview/>
                        </Contactprovider> 
                    </section>
                </div>   
                <Footer/>
            </div>
        );
    }
}

export default Statictutor;