import React, { Component,createContext } from 'react';
import {firestore} from '../firebaseconfig';

export const TutorContext=createContext();

class Tutorprovider extends Component {
    state = {tutors:[]}

    componentDidMount = () => {
        firestore.collection('tutors').onSnapshot(snapshot =>{
          const tutors = snapshot.docs.map(doc => {
            return {
              tutormobile:doc.data().tutormobile,
              tutorgmail: doc.data().tutorgmail,
              tutorname: doc.data().tutorname,
            }
          });
          this.setState({tutors});
        })
    }

    render() {
        const {tutors} = this.state;
        const {children}=this.props;
        return (
            <TutorContext.Provider value={tutors}>{children}</TutorContext.Provider>
        );
    }
}

export default Tutorprovider;