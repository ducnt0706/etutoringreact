import React, {useContext} from 'react';
import {firestore} from '../../firebaseconfig';
import moment from 'moment';
import {UserContext} from '../../providers/Userprovider';
import {Link} from 'react-router-dom';

const belongsToCurrentUser= (currentUser, gmail)=>{
    if(!currentUser) return false;
    return currentUser.email === gmail;
}

const Post = ({id, content, imageUrl, loves, time, tutorPictureurl, tutorgmail, tutorname}) => {
    const {user}=useContext(UserContext);

    const postRef= firestore.collection('posts').doc(id);
    const love =()=>postRef.update({loves:loves+1});

    if(imageUrl!=null){
        return (
            <div className="item" >
            <div className="row ">
                <div className="col-3 col-sm-2">
                    <span className="feed-profile">
                        <img src={tutorPictureurl} className="img-fluid rounded-circle" />
                    </span>
                </div>
                <div className="col-7 col-sm-8">                 
                    <h5>{tutorname}</h5>
                    <div className="full-date"><small>{moment(time.toDate()).calendar()}</small></div>
                    <hr />
                    <p>{content}</p>
                    <img src={imageUrl} className="img-fluid" />  
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-xs container-fluid " onClick={love}><i className="fa fa-heart"></i> {loves} Loves</button>
                </div>
                <div className="col-sm-6 text-center">
                <Link to= {`/posts/${id}`}><button className="btn btn-xs container-fluid"><i className="fa fa-comments"></i> Comment</button></Link> 
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="item" >
                <div className="row ">
                    <div className="col-3 col-sm-2">
                        <span className="feed-profile">
                            <img src={tutorPictureurl} className="img-fluid rounded-circle" />
                        </span>
                    </div>
                    <div className="col-7 col-sm-8">                 
                        <h5>{tutorname}</h5>
                        <div className="full-date"><small>{moment(time.toDate()).calendar()}</small></div>
                        <hr />
                        <p>{content}</p>  
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn btn-xs container-fluid " onClick={love}><i className="fa fa-heart"></i> {loves} Loves</button>
                    </div>
                    <div className="col-sm-6 text-center">
                    <Link to= {`/posts/${id}`}><button className="btn btn-xs container-fluid"><i className="fa fa-comments"></i> Comment</button></Link> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;

//