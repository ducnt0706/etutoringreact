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
      <div className="input-group mb-3 text-center">
        <input type="text" className="form-control" placeholder="Write a comment" onChange={(e) => this.setState({ content: e.target.value })}/>
        <div className="input-group-prepend">
          <button className="btn btn-outline-warning" type="submit" onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    );
  }
}

export default Commentadd;
