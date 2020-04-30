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
        <div className="item">
            <div className="row">
                <div className="col-3 col-sm-2">
                    <span className="feed-profile">
                        <img src={authuser.photoURL} className="img-fluid rounded-circle" />
                    </span>
                </div>
                <div className="col-7 col-sm-8">
                    <div className="content">
                        <h6>{authuser.displayName}</h6>
                    </div>
                    <div className="date text-right"><small>{moment(time.toDate()).calendar()}</small></div>
                    {belongsToCurrentUser(user,authuser) && <button className="pull-right bg-danger" onClick={()=>onDelete(id)}><i className="fa fa-close"></i></button>}
                    <div className="quote has-shadow"> <small>{content}</small></div>
                </div>
            </div>
        </div>
    );
}

export default Comment;

