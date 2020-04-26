import React from 'react';
import {firestore} from '../firebaseconfig';
import moment from 'moment';

const Post = ({id, content, imageUrl, loves, time, tutorPictureurl, tutorgmail, tutorname, onRemove}) => {
    const postRef= firestore.collection('posts').doc(id);
    const love =()=>postRef.update({loves:loves+1});
    
    return (
        <div className="item" >
            <div className="feed d-flex justify-content-between">
                <div className="feed-body d-flex justify-content-between">
                    <span className="feed-profile">
                        <img src={tutorPictureurl} alt="person" className="img-fluid rounded-circle" />
                    </span>

                    <div className="content">
                        <h5>{tutorname}</h5>
                        <div className="full-date"><small>{moment(time.toDate()).calendar()}</small></div>
                        <hr />
                        <p>{content}</p>
                        <img src={imageUrl} alt="Photo.." className="img-fluid" />
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-xs  container-fluid " onClick={love}><i className="fa fa-heart"></i> {loves} Loves</button>
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