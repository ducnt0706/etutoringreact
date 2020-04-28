import React from 'react';

import moment from 'moment';

const Comment = ({ content, user, time }) => {
   //console.log(user.displayName);
    return (
        <div className="item clearfix">
            <div className="feed d-flex justify-content-between">
                <div className="feed-body d-flex justify-content-between">
                    <span className="feed-profile">
                        <img src="https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_10_119_31788589/3793ed558f15664b3f04.jpg" alt="person" className="img-fluid rounded-circle" />
                    </span>
                    <div className="content">
                         <h6></h6>
                    </div>
                </div>
                <div className="date text-right"><small>{moment(time).calendar()}</small></div>
            </div>
                <div className="quote has-shadow"> <small>{content}</small>
            </div>
        </div>
    )
}

export default Comment;