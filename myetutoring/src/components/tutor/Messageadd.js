import React, { Component } from 'react';

class Messageadd extends Component {
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
            <div className="type_msg">
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" onChange={(e) => this.setState({ content: e.target.value })} />
                    <button className="msg_send_btn" type="submit" onClick={this.handleSubmit}>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Messageadd;


