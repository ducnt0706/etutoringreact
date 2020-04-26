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

  unsubscribe=()=>{};

  componentDidMount = async () => {
    this.unsubscribe= firestore.collection('posts').where("tutorgmail", "==", "ducntgch17377@fpt.edu.vn").limit(10).onSnapshot(snapshot =>{
      const posts = snapshot.docs.map(doc => {
        return {
          id:doc.id,
          content: doc.data().content,
          imageUrl: doc.data().imageUrl,
          loves: doc.data().loves,
          time: doc.data().time,
          tutorPictureurl: doc.data().tutorPictureurl,
          tutorgmail: doc.data().tutorgmail,
          tutorname: doc.data().tutorname,
        }
      });
      this.setState({posts});
    })
  }

  componentWillMount= ()=>{
    this.unsubscribe();
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