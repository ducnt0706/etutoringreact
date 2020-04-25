import React from 'react';

const Post = ({id, content, imageUrl, loves, time, tutorPictureurl, tutorgmail, tutorname, onRemove}) => {
    return (
        <div className="item" key={id}>
            <div className="feed d-flex justify-content-between">
                <div className="feed-body d-flex justify-content-between">
                    <span className="feed-profile">
                        <img src={tutorPictureurl} alt="person" className="img-fluid rounded-circle" />
                    </span>

                    <div className="content">
                        <h5>{tutorname}</h5>
                        <div className="full-date"><small>{time}</small></div>
                        <hr />
                        <p>{content}</p>
                        <img src={imageUrl} alt="Photo.." className="img-fluid" />
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-xs  container-fluid "><i className="fa fa-heart"></i> {loves} Loves</button>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-xs  container-fluid"><i className="fa fa-comments"></i> Comment</button>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-xs  container-fluid text-danger" onClick={()=>onRemove(id)}><i className="fa fa-close"></i> Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default Post;