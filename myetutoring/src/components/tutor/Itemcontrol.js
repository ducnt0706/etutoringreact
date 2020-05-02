import React, { Component } from 'react';
import '../../css/Itemcontrol.css';
class Itemcontrol extends Component {
   
    render() {
        return (
            <div className="row bg-white has-shadow">

                <div className="col-xl-3 col-sm-6">
                        <div className="item d-flex align-items-center">

                        <div className="icon bg-primary"><i className="fa fa-image"></i></div>
                      
                            <div className="title">
                                    <span>Daily<br />Postting</span>
                                    <div className="progress">
                                        <div role="progressbar" id="progressbar1"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-violet"></div>
                                    </div>
                            </div>
                            <div className="number"><strong></strong></div>
                        </div>
                    </div>   

                <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">

                        <div className="icon bg-warning"><i className="fa fa-clipboard"></i></div>

                        <div className="title"><span><br />Meetings</span>
                            <div className="progress">
                                <div role="progressbar" id="progressbar2"  aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100" className="progress-bar bg-violet">
                                </div>
                            </div>
                        </div>
                        <div className="number"><strong></strong></div>

                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                        <div className="icon bg-green"><i className="fa fa-address-card"></i></div>
                        <div className="title"><span><br/>Contacts</span>
                            <div className="progress">
                                <div role="progressbar" id="progressbar3"  aria-valuenow="40" aria-valuemin="0"
                                    aria-valuemax="100" className="progress-bar bg-green"></div>
                            </div>
                        </div>
                        <div className="number"><strong></strong></div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                    <div className="icon bg-orange"><i className="fa fa-comment"></i></div>
                    <div className="title"><span><br />Chatting</span>
                        <div className="progress">
                            <div role="progressbar" id="progressbar" aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="100" className="progress-bar bg-orange"></div>
                        </div>
                    </div>
                    <div className="number"><strong></strong></div>
                </div>
            </div>
                                                                                
            </div>                                                               
        );
    }
}

export default Itemcontrol;


