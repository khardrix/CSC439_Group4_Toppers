import React, { Component } from 'react';
import firebase from 'firebase';

export class CartBox extends Component {

    render() {
        const { username, photoSrc } = this.props;

        return (
            <div className="divCartBox">
                <h3>{username}</h3>
                <img
                    src={photoSrc}
                    alt="profile picture"
                />
                <div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </div>
                <p>Items: </p>
                <p>Subtotal: </p>
                <p>Tax: </p>
                <p>Total: </p>
            </div>
        );
    }
}


