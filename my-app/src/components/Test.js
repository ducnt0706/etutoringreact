import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// import bootstrap library
import {firestore } from '../firebaseconfig';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
    }

    componentDidMount = async () => {
        const snapshot = await firestore.collection('listStudent').get();
        const studentarr = snapshot.docs.map(doc => {
            return {
                email: doc.id,
                name: doc.data().name
            }
        });
        this.setState({
            students: studentarr
        });
    }

    render() {
        var students = this.state.students;
        students = students.map((doc, index) => {
            return (
                <li key={index}>
                    <div>{doc.email}</div>
                    <div>{doc.name}</div>
                </li>
            );
        });
        return (
            <div>
                <ul>
                    {students}
                </ul>
            </div>

        );
    }
}

export default Test;