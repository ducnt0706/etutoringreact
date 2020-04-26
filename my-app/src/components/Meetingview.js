import React, { Component } from 'react';
import {firestore,fireauth } from '../firebaseconfig';
import Meeting from '../components/Meeting';
import Meetingadd from '../components/Meetingadd';

class Meetingview extends Component {

  constructor(props) {
    super(props);
    this.state = {
        meetings: []
    }
  }
 
  componentDidMount = async () => {
        this.unsubscribe= firestore.collection('meetings').where("tutorgmail", "==", "ducntgch17377@fpt.edu.vn").limit(10).onSnapshot(snapshot =>{
          const meetings=snapshot.docs.map(doc => {
            return {
                id: doc.id,
                content: doc.data().content,
                date: doc.data().date,
                status: doc.data().status,
                studentgmail:doc.data().studentgmail,
                studentname:doc.data().studentname,
                time:doc.data().time,
                title:doc.data().title,
                tutorgmail:doc.data().tutorgmail,
                tutorname:doc.data().tutorname,
            }
          });
          this.setState({ meetings});
        });
  }

  handleRemove= async (id)=>{
    var confirm=window.confirm("Are you sure you want to remove this meeting?");
    if(confirm==true){
      //TODO:Delete data from db
    firestore.collection('meetings').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    }
  }

  

  render() {
    var meetings=this.state.meetings;
      return (
          <div className="col-lg-4">
                <div className="recent-activities card">
                  <Meetingadd/>
                  <div className="card-header">
                    <h3 className="h4">Meeting Activities</h3>
                  </div>
                  <div id="tutor-meeting-box" className="card-body no-padding">
                    
                    {meetings.map(meeting => <Meeting {...meeting} key={meeting.id} onRemove={this.handleRemove} />)}

                  </div>
                </div>
              </div>
      );
  }
}


export default Meetingview;


  
