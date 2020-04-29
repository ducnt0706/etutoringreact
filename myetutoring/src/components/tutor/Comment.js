import React, {useContext} from 'react';
import moment from 'moment';
import {UserContext} from '../../providers/Userprovider';


const belongsToCurrentUser= (currentUser, authUser)=>{
    if(!currentUser) return false;
    return currentUser.email === authUser.email;
}

const Comment = ({ id,content, authuser, time, onDelete }) => {
    const {user}=useContext(UserContext);

    return (
        <div className="item" >
            <div className="feed d-flex justify-content-between">
                <div className="feed-body d-flex justify-content-between">
                    <span className="feed-profile">
                        <img src={authuser.photoURL} className="img-fluid rounded-circle" />
                    </span>
                    <div className="content">
                        <h6>{authuser.displayName}</h6>
                    </div>
                </div>
                <div className="date text-right"><small>{moment(time.toDate()).calendar()}</small></div>
            </div>
            {belongsToCurrentUser(user,authuser) && <button className="pull-right bg-danger" onClick={()=>onDelete(id)}><i className="fa fa-close"></i></button>}
            <div className="quote has-shadow"> <small>{content}</small></div>
        </div>
    );
}

export default Comment;

