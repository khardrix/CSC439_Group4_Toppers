import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SocialMediaLinks } from './SocialMediaLinks';
import { BottomLinks } from './BottomLinks';
import { LoginBox } from './LoginBox';
import { Header } from './Header';
import { TopLinks } from './TopLinks';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        const { isLoggedIn, username, shoppingCart } = this.props.state;
        return (
            <div>
                <LoginBox />
                <Header />
                <TopLinks />
                <Container>
                    {this.props.children}
                </Container>
                <SocialMediaLinks />
                <BottomLinks />
            </div>
        );
    }
}
