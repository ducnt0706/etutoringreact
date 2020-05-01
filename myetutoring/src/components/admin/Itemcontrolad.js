import React, { Component ,useEffect,useContext} from 'react';
import '../../css/Itemcontrol.css';

const Itemcontrolad =()=> {
        return (
            <div className="row bg-white has-shadow">

                <div className="col-xl-6 col-sm-6">
                    <div className="item d-flex align-items-center">

                        <div className="icon bg-warning"><i className="fa fa-clipboard"></i></div>

                        <div className="title"><span> Provide for students<br/> the best things</span>
                            <div className="progress">
                                <div role="progressbar" id="progressbar2"  aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100" className="progress-bar bg-violet">
                                </div>
                            </div>
                        </div>
                        <div className="number"><strong> </strong></div>

                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                    <div className="icon bg-primary"><i className="fa fa-comment"></i></div>
                    <div className="title"><span>attention and <br />exchange</span>
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

export default Itemcontrolad;


