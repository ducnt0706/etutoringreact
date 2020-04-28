import React, { Component } from 'react';
import { firestore } from '../../firebaseconfig';
import withUser from './withUser';
import { withRouter } from 'react-router-dom';

class AddComment extends Component {
  state = { content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onCreate(this.state)

    this.setState({ content: '' });
  };

  render() {
    const { content } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="AddComment">
        <input
          type="text"
          name="content"
          placeholder="Comment"
          value={content}
          onChange={this.handleChange}
        />
        <input className="btn btn-warning" type="submit" value="Comment" />
      </form>
    );
  }
}

export default withRouter(withUser(AddComment));
