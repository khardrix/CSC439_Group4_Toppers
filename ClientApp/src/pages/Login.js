import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import { LoginBox } from '../components/LoginBox';
// import { CartBox } from '../components/CartBox';

firebase.initializeApp({
    apiKey: "AIzaSyAhvAcTSrnhLRJobA-4kwS2zLyYPvE__ms",
    authDomain: "csc439group4toppers.firebaseapp.com"
})

export class Login extends Component {
    /*
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isSignedIn: false
        };
        this.updateSignInStatus = this.updateSignInStatus.bind(this);
    }
    */
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            { this.props.onLoggedIn(this.state.isSignedIn, firebase.auth().currentUser.displayName, firebase.auth().currentUser.photoURL) }
            console.log("user", user)
        })
    }
    /*
    updateSignInStatus() {
        if (isSignedIn) {
            this.setState = () => firebase.auth().signOut()
        } else {
            <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
            />
        }
    }
    */
    render() {

        const { onLoggedIn } = this.props;

        return (
            <div id="LoginContainer">
                {this.state.isSignedIn ? (
                    <span>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        <img
                            alt="profile picture"
                            src={firebase.auth().currentUser.photoURL}
                        />
                        <br /><br />
                        <div>
                            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        </div>
                    </span>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}

/*
 Just inside return <div>
<LoginBox updateStatus={this.updateSignInStatus} />
<CartBox updateStatus={this.updateSignInStatus} />
 */