import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Sidebarad extends Component {

    render() {
        return (
            <nav className="side-navbar">
                <div className="sidebar-header d-flex align-items-center">
                    <div className="avatar">
                        <img src={this.props.photoUrl} alt="Photo" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="title">
                        <h1 className="h4">{this.props.name}</h1>
                        <p>{this.props.role}</p>
                    </div>
                </div>
                <span className="heading">Main</span>
                <ul className="list-unstyled">
                    <li id="btn-tutor-dashboard" className="pointer"><NavLink to="/"><i className="icon-home"></i>Dashboard</NavLink></li>
                </ul><span className="heading">Extras</span>
                <ul className="list-unstyled">
                    <li className="pointer"><NavLink to="/staticstudent"><i className="icon-form"></i>Student Statics</NavLink></li>
                    <li className="pointer"><NavLink to="/statictutor"><i className="icon-form"></i>Tutor Statics</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Sidebarad;