import React, { Component } from 'react';
import { firestore } from '../firebaseconfig';
import Post from '../components/Post';

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
        id:doc.id,
        content: doc.data().content,
        imageUrl: doc.data().imageUrl,
        loves: doc.data().loves,
        time: doc.data().time.toDate().toString(),
        tutorPictureurl: doc.data().tutorPictureurl,
        tutorgmail: doc.data().tutorgmail,
        tutorname: doc.data().tutorname,
      }
    });
    this.setState({
      posts: postarr
    });
    //console.log(this.state.posts);
  }

  handleRemove= async (id)=>{
    const allposts=this.state.posts;
    var confirm=window.confirm("Are you sure you want to remove this post?");
    if(confirm==true){
      //TODO:Delete data from db
    await firestore.collection('posts').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
      //TODO update UI
      const posts=allposts.filter(post=>post.id !==id);
      this.setState({posts});
    }
  }

  render() {
    var posts = this.state.posts;
      return (
          <div className="col-lg-8">
            <div className="daily-feeds card">
                <div className="card-close">
                  <div className="dropdown">
                    <button type="button" className="dropdown-toggle text-success ">
                      <i className="fa fa-plus-square fa-2x"></i>
                    </button>
                  </div>
                </div>

              <div className="card-header">
                <h3 className="h4">Daily Posts</h3>
              </div>

              <div id="tutor-post-box" className="card-body no-padding">
                {posts.map(post => <Post {...post} key={post.id} onRemove={this.handleRemove} />)}
              </div>

            </div>
          </div>
      );
  }
}

export default Postview;