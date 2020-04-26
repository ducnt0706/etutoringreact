import React, { Component } from 'react';
import {firestore,fireauth } from '../firebaseconfig';
import Meeting from '../components/Meeting';
import Modal from 'react-modal';


class Meetingview extends Component {

  constructor(props) {
    super(props);
    this.state = {
        meetings: [],
        isOpen:false,
        content:'',
        date: '',
        studentgmail:'',
        studentname:'',
        time:'',
        title:'',
    }
  }

  getUserName=()=> {
    return fireauth.currentUser.displayName;
  }

  getGmail=()=> {
    return fireauth.currentUser.email;
  }

  toggleModal = ()=>{
    this.setState({isOpen:!this.state.isOpen})
  }  

  componentDidMount = async () => {
        this.unsubscribe= firestore.collection('meetings').where("tutorgmail", "==", "lytruongfe@gmail.com").limit(10).onSnapshot(snapshot =>{
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

  handleCreate=()=> {
    var meetingDoc = {
      studentgmail: this.state.studentgmail,
      studentname: this.state.studentname,
      tutorname: this.getUserName(),
      tutorgmail: this.getGmail(),
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      time: this.state.time,
      status: false
    }
    firestore.collection('meetings').add(meetingDoc).then(() => {
      console.log("Meeting Document successfully written!");
    })
    this.toggleModal()
  }

  render() {
    var meetings=this.state.meetings;
      return (
          <div className="col-lg-4">
                <div className="recent-activities card">

                  <div className="card-close">
                    <div className="dropdown" onClick={this.toggleModal}>
                      <button type="button" className="dropdown-toggle text-success ">
                        <i className="fa fa-plus-square fa-2x"></i>
                      </button>
                    </div>
                  </div>
                  <Modal
                        isOpen={this.state.isOpen}
                        style={customStyles1}
                        contentLabel="Example Modal"
                        >
                           
                                <div className="modal-content">


                                    <div className="modal-header">
                                        <h4 className="modal-title">New Meeting</h4>
                                        <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal}>&times;</button>
                                    </div>


                                    <div className="modal-body">
                                        <input id="titleInputMeeting" type="text" placeholder="Title" onChange={txt=>this.setState({title:txt.target.value})} /><br />
                                        <textarea id="contentInputMeeting" className="form-control" rows="1" placeholder="Content" onChange={txt=>this.setState({content:txt.target.value})}></textarea>
                                        <input id="dateInputMeeting" type="date" onChange={txt=>this.setState({date:txt.target.value})}/><br />
                                        <input id="timeInputMeeting" type="time" onChange={txt=>this.setState({time:txt.target.value})} /><br />
                                        <div className="input-group mb-3">
                                            <div className="input-group-text">
                                                <input type="checkbox" id="statusInputMeeting" value="false" disabled />
                                            </div>
                                            <input type="text" className="form-control" placeholder="Waiting for student verify!" disabled />
                                        </div>
                                        <input id="emailInputMeeting" type="email" placeholder="Email of student" onChange={txt=>this.setState({studentgmail:txt.target.value})}/><br />
                                        <input id="nameInputMeeting" type="text" placeholder="Name of student"  onChange={txt=>this.setState({studentname:txt.target.value})}/><br />
                                        <div>
                                            <button type="submit" className="btn btn-warning" onClick={this.handleCreate}>Done!</button>
                                            <div className="text-success"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.toggleModal}>Close</button>
                                </div>
                       

                </Modal>

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
const customStyles1 = {
    content : {
    marginTop:120,
      top                   : '35%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:600
    }
  };

export default Meetingview;


  
