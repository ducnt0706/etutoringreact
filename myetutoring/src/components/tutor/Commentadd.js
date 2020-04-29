import React, { Component } from 'react';

class Commentadd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onCreate(this.state.content)

    this.setState({ content: null });
  };

  render() {
    const { content } = this.state;

    return (
      <div class="input-group mb-3 text-center">
        <input type="text" class="form-control" placeholder="Write a comment" onChange={(e) => this.setState({ content: e.target.value })}/>
        <div class="input-group-prepend">
          <button class="btn btn-outline-warning" type="submit" onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    );
  }
}

export default Commentadd;
