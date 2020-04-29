import React from 'react';
import moment from 'moment';

const Comment = ({ content, user, time }) => {
    return (
        <div className="item" >
            <div className="feed d-flex justify-content-between">
                <div className="feed-body d-flex justify-content-between">
                    <span className="feed-profile">
                        <img src={user.photoURL} className="img-fluid rounded-circle" />
                    </span>
                    <div className="content">
                        <h6>{user.displayName}</h6>
                    </div>
                </div>
                <div className="date text-right"><small>{moment(time.toDate()).calendar()}</small></div>
            </div>
            <div className="quote has-shadow"> <small>{content}</small></div>
        </div>
    );
}

export default Comment;

