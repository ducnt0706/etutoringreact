import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Postdetail from './Postdetail';
import Commentview from './Commentview';
import { firestore } from '../../firebaseconfig';

import { withRouter } from 'react-router-dom';
import withUser from '../withUser';

class Postpage extends Component {
    state = { post: null, comments: [] }

    postId() {
        return this.props.match.params.id;
    }

    postRef() {
        return firestore.doc(`posts/${this.postId()}`);
    }

    commentsRef() {
        return this.postRef().collection('comments');
    }
    collectIdsAndData = doc => ({ id: doc.id, ...doc.data() })

    componentDidMount = () => {
        this.postRef().onSnapshot(snapshot => {
            const post = {
                id: snapshot.id,
                ...snapshot.data(),
            }
            this.setState({ post });
        })

        this.commentsRef().onSnapshot(snapshot => {
            const comments = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    content: doc.data().content,
                    user: doc.data().user,
                    time: doc.data().time,
                }
            });
            this.setState({ comments });
        })

    }
    createComment = (comment) => {
        const name=this.props.user.user.displayName;
        const photoUrl=this.props.user.user.photoURL;
        this.commentsRef().add({
            content:comment,
            time:new Date(),
            user:{
                displayName:name,
                photoURL:photoUrl
            }
        })
    }


    render() {
        //console.log(this.props.user);
        const { post, comments } = this.state; 
        return (
            <div className="content-inner color-gradient-grey">
                <header className="page-header">
                    <div className="container-fluid">
                        <h2 className="no-margin-bottom">Post page</h2>
                    </div>
                </header>
                <div>
                    <section className="dashboard-counts no-padding-bottom ">
                        <div className="daily-feeds card">
                            <div className="card-header">
                                <h3 className="h4"></h3>
                            </div>
                            <div id="tutor-post-box" className="card-body no-padding">
                                {post && <Postdetail {...post} />}
                                <Commentview 
                                comments={comments} 
                                onCreate={this.createComment} 
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(withUser((Postpage)));