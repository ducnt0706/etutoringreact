import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Staticstuview from '../../components/admin/Staticstuview';
import Contactprovider from '../../providers/Contactprovider';

class Staticstu extends Component {
    render() {
        return (
            <div className="content-inner color-gradient-grey">
                <header className="page-header">
                    <div className="container-fluid">
                        <h2 className="no-margin-bottom">Static Students!</h2>
                    </div>
                </header>
                <div>
                    <section className="dashboard-counts no-padding-bottom ">
                        <Contactprovider>
                            <Staticstuview/>
                        </Contactprovider> 
                    </section>
                </div>   
                <Footer/>
            </div>
        );
    }
}

export default Staticstu;