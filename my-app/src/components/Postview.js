import React, { Component} from 'react';
import { firestore} from '../firebaseconfig';
import Post from '../components/Post';
import Modal from 'react-modal';
//TODO: get data form post provider
import {PostContext} from '../providers/Postprovider';

class Postview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen:false,
      content: '',
      imageUrl: '',
      loves: null,
      time: null,
      tutorPictureurl:null,
      tutorgmail: '',
      tutorname: '',
    }
  }


  toggleModal = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }  

  handleRemove= async (id)=>{
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

  postDataPosts = ()=>{
        var post = {
          content: this.state.content,
          imageUrl: this.state.imageUrl,
          loves: this.state.loves,
          time: firestore.Timestamp.fromDate(new Date()),
          tutorPictureurl: this.state.tutorPictureurl,
          tutorgmail: this.state.tutorgmail,
          tutorname: this.state.tutorname,
        }
   
  this.toggleModal()
}
  

render() {
    const posts=useContext(PostContext);
    return (
        <div className="col-lg-8">
          <div className="daily-feeds card">
              <div className="card-close" onClick={this.toggleModal}>
                  <button type="button" className="dropdown-toggle text-success ">
                    <i className="fa fa-plus-square fa-2x"></i>
                  </button>
              </div>
              <Modal
                          isOpen={this.state.isOpen}
                          style={customStyles}
                          contentLabel="Example Modal"
                          >
                              
                                  <div className="modal-content">

                                      <div className="modal-header">
                                          <h4 className="modal-title">Modal Heading</h4>
                                          <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal}>&times;</button>
                                      </div>

                                      <div className="modal-body">
                                          <form id="create-new-post">
                                              <input   type="text" name="content" placeholder="What is your mind?"  onChange={(txt) => this.setState({content:txt.target.value})} />
                                              <br />
                                              <input id="mediaInputPost" type="file" accept="image/*" capture onChange={(txt) => this.setState({imageUrl:txt.target.value})}/>
                                              <br />
                                              <button id="postSubmit" type="submit" className="btn btn-warning" onClick={this.postDataPosts}>Post</button>
                                          </form>
                                      </div>

                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.toggleModal}>Close</button>
                                      </div>

                                  </div>
                          </Modal>  

            <div className="card-header">
              <h3 className="h4">Daily Posts</h3>
            </div>


            <div id="tutor-post-box" className="card-body no-padding">
              <PostContext.Consumer>
                  {posts=>posts.map(post => <Post {...post} key={post.id} onRemove={this.handleRemove} />)}
              </PostContext.Consumer>
              
            </div>

          </div>
        </div>
    );
}
}

const customStyles = {
    content : {
    marginTop:40,
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:600
    }
  };
export default Postview;

  //   firestore().collection('posts').add(post).then((postRef) => {
  //   // Upload the image to cloud
  //   var filePath = fireauth().currentUser.uid + '/' + postRef.id + '/' + this.state.imageUrl.name;
  //   storage().ref(filePath).put(this.state.imageUrl).then((fileSnapshot) => {
  //     // Generate a public URL for the file.
  //     fileSnapshot.ref.getDownloadURL().then((url) => {
  //       // Update the chat message placeholder with the image's URL.
  //       postRef.update({
  //         imageUrl: url,
  //         storageUri: fileSnapshot.metadata.fullPath
  //       });
  //     });
  //   })
  // }).catch(function (error) {
  //   console.error('There was an error uploading a file to Cloud Storage:', error);
  // });