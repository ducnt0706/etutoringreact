import React, { Component } from 'react';
import Modal from 'react-modal';
import '../css/Itemcontrol.css';
class Itemcontrol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            isOpen2:false
        };
      }

    toggleModal = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }  
    toggleModal2 = ()=>{
        this.setState({isOpen2:!this.state.isOpen2})
    } 
   
    render() {
        return (
            <div className="row bg-white has-shadow">

                <div className="col-xl-3 col-sm-6">
                        <div className="item d-flex align-items-center">

                            <button type="button" className="icon bg-violet" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus-circle"></i></button>

                          
                            <Modal
                            isOpen={this.state.isOpen}
                            //onAfterOpen={afterOpenModal}
                            //onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            >
                                
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h4 className="modal-title">Modal Heading</h4>
                                            <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal}>&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <form id="create-new-post">
                                                <input id="contentInputPost" type="text" name="content" placeholder="What is your mind?" /><br />
                                                <input id="mediaInputPost" type="file" accept="image/*" capture /><br />
                                                <button id="postSubmit" type="submit" className="btn btn-warning" >Post</button>
                                            </form>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.toggleModal}>Close</button>
                                        </div>

                                    </div>
                            </Modal>

                            <div className="title" onClick={this.toggleModal}>
                                    <span>New<br />Post</span>
                                    <div className="progress">
                                        <div role="progressbar" id="progressbar1"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-violet"></div>
                                    </div>
                            </div>
                            <div className="number"><strong>5</strong></div>
                        </div>
                    </div>   

                <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">

                        <button type="button" className="icon bg-red" data-toggle="modal" data-target="#myModal2">
                            <i className="fa fa-plus-circle"></i>
                        </button>

                        
                        <Modal
                        isOpen={this.state.isOpen2}
                        style={customStyles1}
                        contentLabel="Example Modal"
                        >
                           
                                <div className="modal-content">


                                    <div className="modal-header">
                                        <h4 className="modal-title">New Meeting</h4>
                                        <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal2}>&times;</button>
                                    </div>


                                    <div className="modal-body">
                                        <input id="titleInputMeeting" type="text" placeholder="Title" /><br />
                                        <textarea id="contentInputMeeting" className="form-control" rows="1" placeholder="Content"></textarea>
                                        <input id="dateInputMeeting" type="date" /><br />
                                        <input id="timeInputMeeting" type="time" /><br />
                                        <div className="input-group mb-3">
                                            <div className="input-group-text">
                                                <input type="checkbox" id="statusInputMeeting" value="false" disabled />
                                            </div>
                                            <input type="text" className="form-control" placeholder="Waiting for student verify!" disabled />
                                        </div>
                                        <input id="emailInputMeeting" type="email" placeholder="Email of student" /><br />
                                        <input id="nameInputMeeting" type="text" placeholder="Name of student" /><br />
                                        <div>
                                            <button type="submit" className="btn btn-warning" >Done!</button>
                                            <div className="text-success"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.toggleModal2}>Close</button>
                                </div>
                       


                        </Modal>

                        <div className="title" onClick={this.toggleModal2}><span>New<br />Meeting</span>
                            <div className="progress">
                                <div role="progressbar" id="progressbar2"  aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100" className="progress-bar bg-violet">
                                </div>
                            </div>
                        </div>
                        <div className="number"><strong>00</strong></div>

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
                        <div className="number"><strong>6</strong></div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                    <div className="icon bg-orange"><i className="fa fa-comment"></i></div>
                    <div className="title"><span><br />Messages</span>
                        <div className="progress">
                            <div role="progressbar" id="progressbar" aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="100" className="progress-bar bg-orange"></div>
                        </div>
                    </div>
                    <div className="number"><strong>50</strong></div>
                </div>
            </div>
                                                                                
            </div>                                                               
        );
    }
}
const customStyles = {
    content : {
    marginTop:40,
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:600
    }
  };
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
export default Itemcontrol;


