import React, { Component } from 'react';

import Messageview from '../components/tutor/Messageview';

import { withRouter } from 'react-router-dom';
import withUser from '../providers/withUser';
import { firestore } from '../firebaseconfig';

class Chatbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    chatId() {
        return this.props.match.params.id;
    }

    chatRef() {
        return firestore.doc(`chats/${this.chatId()}`);
    }

    messagesRef() {
        return this.chatRef().collection('messages');
    }

    componentDidMount = () => {
        this.messagesRef().orderBy('time', 'asc').onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    content: doc.data().content,
                    authuser: doc.data().authuser,
                    time: doc.data().time,
                }
            });
            this.setState({ messages });
        })
    }
    createMessage = (message) => {
        const name = this.props.user.user.displayName;
        const photoUrl = this.props.user.user.photoURL;
        const currentEmail = this.props.user.user.email;
        this.messagesRef().add({
            content: message,
            time: new Date(),
            authuser: {
                displayName: name,
                photoURL: photoUrl,
                email: currentEmail
            }
        })
    }
    deleteMessage = (id) => {
        var confirm=window.confirm("Are you sure you want to delete message from you?");
        if(confirm===true){
            this.messagesRef().doc(id).delete();
        }     
    }



    render() {
        //console.log(this.state.messages);
        const { messages } = this.state;
        return (
            <div className="mesgs">
                <Messageview
                    messages={messages}
                    onCreate={this.createMessage}
                    onDelete={this.deleteMessage}
                />
            </div>
        );
    }
}

export default withRouter(withUser((Chatbox)));

/* <div className="outgoing_msg">
<div className="sent_msg">
    <p>Great start, I've added some Lorem ipsum dolor sit amet. </p>
    <span className="time_date"> 12:15 PM | Mar 9</span>
</div>
</div> */