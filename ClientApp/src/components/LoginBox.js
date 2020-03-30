import React, { Component } from 'react';
import ReactDom from 'react-dom';


function LoggedIn(props) {
    const isLoggedIn = props.isSignedIn
}

export class LoginBox extends Component {
    render() {
        return (
            <div id="loginBox">
                <a href="login.html"><p>Login</p></a>
            </div>
        );
    }
}
