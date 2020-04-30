import React, { useContext } from 'react';
import moment from 'moment';
import { UserContext } from '../../providers/Userprovider';
import '../../css/Messageitem.css';

const belongsToCurrentUser = (currentUser, authUser) => {
    if (!currentUser) return false;
    return currentUser.email === authUser.email;
}

const Message = ({ id, content, authuser, time, onDelete }) => {
    const { user } = useContext(UserContext);

    return (
        <div className="incoming_msg margin-medium">
            <div className="incoming_msg_img"> 
                <img src={authuser.photoURL} className="img-fluid" /> 
            </div>
            <div className="received_msg">
                <span className="time_date">{authuser.displayName}</span>
                <div className="received_withd_msg">
                    {belongsToCurrentUser(user,authuser) && <button className="pull-right btn btn-outline-danger" onClick={()=>onDelete(id)}><i className="fa fa-close"></i></button>}
                    <p>{content}</p>
                    <span className="time_date">{moment(time.toDate()).calendar()}</span>
                    
                </div>
            </div>
        </div>
    );
}

export default Message;
