/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import FacebookLoginBtn from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }

    componentClicked = () => {
        alert('facebook button clicked');
    }

    responseFacebook = (response) => {
        alert(response);
    }
   
    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    HI!
                </div>
            ) :
            facebookData = (
                <FacebookLogin
                    appId="761798047680503"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );

        return (
            <>
                {facebookData}
            </ >
        );
    }
}
*/