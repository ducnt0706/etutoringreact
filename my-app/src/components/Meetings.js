import React, { Component } from 'react';
import Meeting from '../components/Meeting';
import { firestore } from '../firebaseconfig';

const Meetings = ({ meetings, onRemove }) => {
    return (
        <div className="col-lg-4">
            <div className="recent-activities card">

                <div className="card-close">
                    <div className="dropdown">
                        <button type="button" id="closeCard8" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" className="dropdown-toggle"><i className="fa fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>

                <div className="card-header">
                    <h3 className="h4">Meeting Activities</h3>
                </div>
                <div id="tutor-meeting-box" className="card-body no-padding">
                    {meetings.map(meeting => <Meeting {...meeting} key={meeting.id} onRemove={onRemove} />)}
                </div>
            </div>
        </div>
    )
}
export default Meetings;


