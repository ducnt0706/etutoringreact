import React, {useContext} from 'react';
import {firestore} from '../../firebaseconfig';
import moment from 'moment';
import {Link} from 'react-router-dom';
//import {UserContext} from '../providers/Userprovider';


// const getTutorgmail=(studentgmail)=>{
//     firestore.collection("contacts").where("tutorgmail","==", studentgmail).get().then((contact)=>{
//         if(contact.exists){
//             return contact.data().tutorgmail;
//         }
//     })
// }

// const belongsToCurrentUser= (currentgmail, gmail)=>{
//     if(!currentgmail) return false;
//     return currentgmail === gmail;
// }

const Poststu = ({id, content, imageUrl, loves, time, tutorPictureurl, tutorgmail, tutorname, onRemove}) => {
    //const {user}=useContext(UserContext);
    //const gmail=getTutorgmail(user.email);

    const postRef= firestore.collection('posts').doc(id);
    const love =()=>postRef.update({loves:loves+1});

    if(imageUrl!=null){
        return (
            <div>
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
                        <Link to= {`/posts/${id}`}><button className="btn btn-xs  container-fluid"><i className="fa fa-comments"></i> Comment</button></Link>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>  
            </div>
            </div>
            
        )
    }else{
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
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-4">
                        <button className="btn btn-xs  container-fluid " onClick={love}><i className="fa fa-heart"></i> {loves} Loves</button>
                    </div>
                    <div className="col-sm-4">
                        <Link to= {`/posts/${id}`}><button className="btn btn-xs  container-fluid"><i className="fa fa-comments"></i> Comment</button></Link>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>   
            </div>
        )
    }
}

export default Poststu;