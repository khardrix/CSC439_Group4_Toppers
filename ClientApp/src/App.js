import React, { Component } from 'react';
import { Route } from 'react-router';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './pages/FetchData';
import { Counter } from './pages/Counter';
import { Deals } from './pages/Deals';
import { Pizzas } from './pages/Pizzas';
import { About } from './pages/About';
import { GiftCards } from './pages/GiftCards';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';


import './custom.css'
import './index.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        // define the initial / default state in the constructor
        this.state = {
            isLoggedIn: false,
            username: 'Guest',
            shoppingCart: [],
        }

        this.onLoggedIn = this.onLoggedIn.bind(this);
    }

    // add event handlers ... to CHANGE state using react's "setState" method
    onLoggedIn = () => {
        if (this.state.isLoggedIn) {
            this.setState({

            });
        }
    }

    render() {
        return (
            <Layout state={this.state}>
                <Route exact path='/' component={Deals} />

                <Route exact path='/home' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/pizzas.html' component={Pizzas} />
                <Route path='/about.html' component={About} />
                <Route path='/giftcards.html' component={GiftCards} />
                <Route path='/contact.html' component={Contact} />
                <Route path='/login.html' render={props => (<Login {...props} state={this.state} onLoggedIn={this.onLoggedIn} />)} />
            </Layout>
        );
    }
}
