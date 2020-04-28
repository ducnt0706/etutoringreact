import React from 'react';
import tuvetor from '../../img/tuvetor.jpg';

const Statictutor = ({tutorgmail,tutorname,tutormobile }) => {

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
                            <img src={tuvetor} alt="Photo..." className="img-fluid rounded-circle" />
                            <div className="status bg-green"></div>
                        </div>
                        <div className="client-title">
                            <h3>{tutorname}</h3>
                            <h3>Tutor</h3>
                        </div>
                        <br />
                        <p className="text-danger">
                            Number of messages in 7 days: ??
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <i className="fa fa-phone"></i><br /><small>{tutormobile}</small>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-google-plus"></i><br /><small>{tutorgmail}</small>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Statictutor;