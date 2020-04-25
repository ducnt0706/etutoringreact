import React, { Component } from 'react';
import { firestore } from '../firebaseconfig';

class Postview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts')
      .where("tutorgmail", "==", "ducntgch17377@fpt.edu.vn")
      .limit(10)
      .get();
    const postarr = snapshot.docs.map(doc => {
      return {
        content: doc.data().content,
        imageUrl: doc.data().imageUrl,
        loves: doc.data().loves,
        time: doc.data().time.toDate(),
        tutorPictureurl: doc.data().tutorPictureurl,
        tutorgmail: doc.data().tutorgmail,
        tutorname: doc.data().tutorname,
      }
    });
    this.setState({
      posts: postarr
    });
    console.log(this.state.posts);
  }

  render() {
    var posts = this.state.posts;
    var postList = posts.map((doc, index) => {
      return (
        <div className="item" key={index}>
          <div className="feed d-flex justify-content-between">
            <div className="feed-body d-flex justify-content-between">
              <span className="feed-profile">
                <img src={doc.tutorPictureurl}  alt="person" className="img-fluid rounded-circle" />
              </span>
              <div className="content">
                <h5>{doc.tutorname}</h5>
                    <div className="full-date"><small></small></div>
                <hr />
                <p>{doc.content}</p>
                <img src={doc.imageUrl} alt="Photo.." className="img-fluid"/>
                  <div className="CTAs">
                    <button className="btn btn-xs btn-secondary"><i className="fa fa-heart"></i> {doc.loves} Loves</button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        )
      })
      return (
          <div className="col-lg-8">
            <div className="daily-feeds card">
              <div className="card-close">
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>

              <div className="card-header">
                <h3 className="h4">Daily Posts</h3>
              </div>

              <div id="tutor-post-box" className="card-body no-padding">
                  {postList}
              </div>

            </div>
          </div>
      );
  }
}

export default Postview;