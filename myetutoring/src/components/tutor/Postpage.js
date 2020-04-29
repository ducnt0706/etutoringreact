import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Postdetail from './Postdetail';
import Commentview from './Commentview';
import { firestore } from '../../firebaseconfig';
import { Link } from 'react-router-dom';

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
                    authuser: doc.data().authuser,
                    time: doc.data().time,
                }
            });
            this.setState({ comments });
        })

    }
    createComment = (comment) => {
        const name = this.props.user.user.displayName;
        const photoUrl = this.props.user.user.photoURL;
        const currentEmail = this.props.user.user.email;
        this.commentsRef().add({
            content: comment,
            time: new Date(),
            authuser: {
                displayName: name,
                photoURL: photoUrl,
                email: currentEmail
            }
        })
    }
    deleteComment = (id) => {
        this.commentsRef().doc(id).delete();
    }


    render() {
        //console.log(this.props.user);
        const { post, comments } = this.state;
        return (
            <div className="content-inner color-gradient-grey">
                <header className="page-header">
                    <div className="container-fluid">
                        <Link to='/'><h2 className="no-margin-bottom"><i className="fa fa-backward"></i> Back</h2></Link>
                    </div>
                </header>
                <section className="dashboard-counts no-padding-bottom ">
                    <div className="container-fluid">
                        <div className="row bg-white has-shadow">

                            <div className="col-xl-6 col-sm-6">
                                <div className="">
                                    {post && <Postdetail {...post} />}
                                 </div>
                            </div>

                            <div className="col-xl-6 col-sm-6">
                                <div className="">
                                    <Commentview
                                        comments={comments}
                                        onCreate={this.createComment}
                                        onDelete={this.deleteComment}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default withRouter(withUser((Postpage)));