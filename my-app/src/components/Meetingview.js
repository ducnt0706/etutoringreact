import React, { Component } from 'react';
import {firestore } from '../firebaseconfig';
import Meeting from '../components/Meeting';

class Meetingview extends Component {

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
            title:doc.data().title,
            tutorgmail:doc.data().tutorgmail,
            tutorname:doc.data().tutorname,
        }
    });
    this.setState({
        meetings: meetingarr
    });
    //console.log(this.state.meetings);
  }

  handleRemove= async (id)=>{
    const allmeetings=this.state.meetings;
    var confirm=window.confirm("Are you sure you want to remove this meeting?");
    if(confirm==true){
      //TODO:Delete data from db
    await firestore.collection('meetings').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
      //TODO update UI
      const meetings=allmeetings.filter(meeting=>meeting.id !==id);
      this.setState({meetings});
    }
  }
  // function createNewMeeting(tutorname, tutorgmail, title, content, date, time, status, studentgmail, studentname) {
  //   var meetingDoc = {
  //     studentgmail: studentgmail,
  //     studentname: studentname,
  //     tutorname: tutorname,
  //     tutorgmail: tutorgmail,
  //     title: title,
  //     content: content,
  //     date: date,
  //     time: time,
  //     status: status
  //   }
  //   firebase.firestore().collection('meetings').add(meetingDoc).then(() => {
  //     console.log("Meeting Document successfully written!");
  //   })
  // }

  render() {
    var meetings=this.state.meetings;
      return (
          <div className="col-lg-4">
                <div className="recent-activities card">

                  <div className="card-close">
                    <div className="dropdown">
                      <button type="button" className="dropdown-toggle text-success ">
                        <i className="fa fa-plus-square fa-2x"></i>
                      </button>
                    </div>
                  </div>

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


  
//TODO: update status meeting
// function updateMeetingStatus(idMeeting) {
//   firebase.firestore().collection("meetings").doc(idMeeting).update({
//     status: true
//   }).then(function () {
//     console.log("Document successfully updated!");
//   }).catch(function (error) {
//     console.error("Error updating document: ", error);
//   });
// }