import React, { useContext } from 'react';

import Chatitem from './Chatitem';

//TODO: get data form post provider
import { ContactContext } from '../../providers/Contactprovider';

const Chatlist = () => {


    const contacts = useContext(ContactContext);

    return (
        <div className="inbox_people">
            <div className="headind_srch">
                <div className="srch_bar">
                    <div className="stylish-input-group text-center">
                        <h4 className="text-warning">List students</h4>
                    </div>
                </div>
            </div>

            <div className="inbox_chat">
                <div className="chat_list">
                    {contacts.map(contact => <Chatitem {...contact} key={contact.id} />)}
                </div>
            </div>
        </div>
    );

}

export default Chatlist;

// {posts.map(post => <Post {...post} key={post.id} onRemove={handleRemove} />)}