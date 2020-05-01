import React, { Component,createContext } from 'react';
import {firestore} from '../firebaseconfig';

export const StudentContext=createContext();

class Studentprovider extends Component {
    state = {students:[]}

    componentDidMount = () => {
        firestore.collection('students').onSnapshot(snapshot =>{
          const students = snapshot.docs.map(doc => {
            return {
              studentmobile: doc.data().studentmobile,
              studentgmail: doc.data().studentgmail,
              studentname: doc.data().studentname
              
            }
          });
          this.setState({students});
        })
    }

    render() {
        const {children}=this.props;
        return (
            <StudentContext.Provider value={this.state}>{children}</StudentContext.Provider>
        );
    }
}

export default Studentprovider;