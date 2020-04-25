import React, { Component } from 'react';
import { firestore } from '../firebaseconfig';
import stvetor from '../img/student.jpg';

class Contactview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        }
    }
    componentDidMount = async () => {
        const snapshot = await firestore.collection('tutorcontacts')
                                        .doc('hannn@fpt.edu.vn')
                                        .collection('students')
                                        .get();
        const contactarr = snapshot.docs.map(doc => {
            return {
                email: doc.id,
                mobile: doc.data().mobile,
                mssv:doc.data().mssv,
                name:doc.data().name
            }
        });
        this.setState({
            contacts: contactarr
        });
        //console.log(this.state.contacts);
      }
    render() {
        var contacts=this.state.contacts;
        var contactList=contacts.map((doc,index)=>{
            return (
                <div className="col-lg-4" key={index}>
                <div className="client card">
                    <div className="card-close">
                        <button type="button" className="dropdown-toggle">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                    </div>
                    <div className="card-body text-center">
                        <div className="client-avatar">
                            <img src={stvetor} alt="Photo..." className="img-fluid rounded-circle"/>
                            <div className="status bg-green"></div>
                        </div>
                        <div className="client-title">
                            <h3>{doc.name}</h3>
                            <h3>{doc.mssv}</h3>
                            <a href="#">Contact</a>
                        </div>
                        <br />
                        <p className="text-danger">
                            Last Signin: 20/04/2020<br/>
                            7 days no interact
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <i className="fa fa-phone"></i><br/><small>{doc.mobile}</small>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-google-plus"></i><br/><small>{doc.email}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        });
        return (
            <div className="container-fluid">
                <div className="row">{contactList}</div> 
            </div>
            
        );
    }
}

export default Contactview;