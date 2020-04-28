import React, { Component } from 'react';
import '../../css/Itemcontrol.css';
class Itemcontrolad extends Component {
   
    render() {
        return (
            <div className="row bg-white has-shadow">

                <div className="col-xl-6 col-sm-6">
                    <div className="item d-flex align-items-center">

                        <div className="icon bg-warning"><i className="fa fa-clipboard"></i></div>

                        <div className="title"><span>Students<br/>without tutors</span>
                            <div className="progress">
                                <div role="progressbar" id="progressbar2"  aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100" className="progress-bar bg-violet">
                                </div>
                            </div>
                        </div>
                        <div className="number"><strong>5</strong></div>

                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                    <div className="icon bg-primary"><i className="fa fa-comment"></i></div>
                    <div className="title"><span>Messages<br />in 7 days</span>
                        <div className="progress">
                            <div role="progressbar" id="progressbar" aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="100" className="progress-bar bg-orange"></div>
                        </div>
                    </div>
                    <div className="number"><strong>50</strong></div>
                </div>
            </div>
                                                                                
            </div>                                                               
        );
    }
}

export default Itemcontrolad;


