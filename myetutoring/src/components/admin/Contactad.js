import React from 'react';
import ctvetor from '../../img/contactvetor.png';

const Contactad = ({ tutorgmail, tutorname, studentname, studentgmail, studentmobile, studentmssv }) => {

    return (
        <div className="col-lg-4 ">

            <div className="client card">
                <div className="card-close">
                    <button type="button" className="dropdown-toggle">
                        <i className="fa fa-ellipsis-v"></i>
                    </button>
                </div>
                <div className="card-body text-center">
                    <div className="client-avatar">
                        <img src={ctvetor} alt="Photo..." className="img-fluid rounded-circle" />
                    </div>
                    <div className="client-title">
                        <h3>{tutorname}</h3>
                        <h3>Tutor</h3>
                        <h6>{tutorgmail} <i className="fa fa-google-plus"></i></h6>
                        <span>Assigned</span>
                        <h3>{studentname}</h3>
                        <h3>{studentmssv}</h3>
                        <h6>{studentgmail} <i className="fa fa-google-plus"></i></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactad;