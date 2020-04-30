import React, { useContext } from 'react';
import { UserContext } from '../../providers/Userprovider';
import stvetor from '../../img/student.jpg';
import moment from 'moment';
import {Link} from 'react-router-dom';

const belongsToCurrentUser = (currentUser, gmail) => {
    if (!currentUser) return false;
    return currentUser.email === gmail;
}

const Chatitem = ({tutorgmail,tutorname,studentname,studentgmail,studentmobile,studentmssv,studenttimeinteract }) => {
    const {user} = useContext(UserContext);

    return (
        <div >
            {belongsToCurrentUser(user,tutorgmail) && 
            <Link className="btn btn-outline-warning"  to={`/chats/${studentgmail}`}>
                <div className="chat_people ">
                    <div className="chat_img ">
                        <img src={stvetor} className="img-fluid" />
                    </div>
                    <div className="chat_ib">
                        <span className="pull-right">{moment(studenttimeinteract.toDate()).calendar()}</span>
                        <br/>
                        <h5>{studentname} </h5>
                        <p>{studentmssv}-{studentgmail}</p>
                    </div>
            </div></Link>}
        </div>
    )
}

export default Chatitem;

