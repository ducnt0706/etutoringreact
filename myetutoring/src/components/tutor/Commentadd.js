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
      <form >
        <input type="text" onChange={(e) => this.setState({ content: e.target.value })} />
        <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Comment</button>
      </form>
    );
  }
}

export default Commentadd;
