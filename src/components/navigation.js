import React, { Component } from "react";

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.deadLink = this.deadLink.bind(this);
    }
    deadLink () {
        alert('Sorry, this link is not active.');
    }
    render() {
        return (
            <div className="container" id="navBar">
            {/* a bunch of links that go nowhere */}
                <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <a className="navbar-brand orangeText" href="#">My Links</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link orangeText" href="https://www.linkedin.com/in/kalonohmstede/">LinkedIn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link orangeText" href="https://github.com/KalonOhm">GitHub</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link orangeText" href="#" onClick={this.deadLink}>Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}