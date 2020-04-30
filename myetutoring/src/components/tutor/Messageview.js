import React from 'react'
import Message from './Message';
import Messageadd from './Messageadd';


const Messageview = ({ messages, onCreate, onDelete }) => {
    return (
        <div className="height-medium">
                <div className="scroll-right">
                    {messages.map(message => <Message {...message} key={message.id}  onDelete={onDelete}/>)}
                </div> 
                <Messageadd onCreate={onCreate}/> 
        </div>
    )
}

export default Messageview;
