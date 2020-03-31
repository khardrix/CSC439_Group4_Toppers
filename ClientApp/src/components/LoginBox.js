import React, { Component } from 'react';


export class LoginBox extends Component {

    render() {
        const { isLoggedIn, username, photoURL } = this.props;

        return (
            <div id="loginBox">
                {!isLoggedIn &&
                    <a href="login.html"><p>Login</p></a>
                }
                {isLoggedIn &&
                    <a href="logout.html"><p>Logout</p></a>
                }
            </div>
        );
    }
}
