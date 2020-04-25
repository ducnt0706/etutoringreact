import React, { Component } from 'react';
import {firestore } from '../firebaseconfig';
import Meetings from '../components/Meetings';

class Meetingcontroller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: [],
        }
      }
    
      componentDidMount = async () => {
        const snapshot = await firestore.collection('meetings')
                                        .where("tutorgmail", "==", "lytruongfe@gmail.com")
                                        .limit(10)
                                        .get();
        const meetingarr = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                content: doc.data().content,
                date: doc.data().date,
                status: doc.data().status,
                studentgmail:doc.data().studentgmail,
                studentname:doc.data().studentname,
                time:doc.data().time,
                title:doc.data().title
            }
        });
        this.setState({
            meetings: meetingarr
        });
      }
      handleCreate= meeting=>{

      }

      handleRemove= async id=>{
        const allmeetings=this.state.meetings;
    
        const meetings=allmeetings.filter(meeting=>meeting.id !==id);
    
        this.setState({meetings});
      }
    
        render() {

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
                        <Meetings meetings={this.state.meetings} onRemove={this.handleRemove}/>
                    </div>
                  </div>
                </div>
            )
        }
}

export default Meetingcontroller;