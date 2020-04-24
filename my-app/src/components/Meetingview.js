import React, { Component } from 'react';
import {firestore } from '../firebaseconfig';

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
    console.log(this.state.meetings);
  }

    render() {
      var meetings=this.state.meetings;
      var meetingitems=meetings.map((doc,index)=>{
        return (
          <div className="item" key={index}>
                        <div className="row">
                          <div className="col-4 date-holder bg-color-orange">
                              <div className="text-right">
                                    <div className="icon bg-danger" ><i className="fa fa-close "></i></div>
                              </div>
                              <div className="date text-center"> 
                                    <h3 className="text-color-black">{doc.time}</h3>
                                    <h6 className="text-color-black">{doc.date}</h6>
                                    <div><i className={doc.status? "fa fa-thumbs-up fa-3x text-success":"fa fa-paper-plane fa-3x" }></i></div>
                               </div> 
                          </div>
                          <div id="tutor-meeting-content" className="col-8 content">
                            <h5>{doc.title}</h5>
                            <p>{doc.content}</p>
                            <p>{doc.studentname} {doc.studentgmail}</p>
                          </div>
                        </div>
                      </div>
          );
      });
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
                      
                      {meetingitems}

                    </div>
                  </div>
                </div>
        );
    }
}

export default Meetingview;