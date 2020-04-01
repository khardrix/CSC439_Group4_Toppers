import React, { Component } from 'react';


export class LoginBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn, username, photoSrc } = this.props;

        return (
            <div id="loginBox">
                {!isLoggedIn &&
                    <div>
                        <p>{username}</p>
                        <a href="login.html"><button>Login</button></a>
                    </div>
                }
                {isLoggedIn &&
                    <div>
                        <p>{username}</p>
                        <img
                            src={photoSrc}
                            alt="profile picture"
                        />
                        <a href="index.html"><button>Logout</button></a>
                    </div>
                }
            </div>
        );
    }
}
