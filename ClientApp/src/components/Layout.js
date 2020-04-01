import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SocialMediaLinks } from './SocialMediaLinks';
import { BottomLinks } from './BottomLinks';
import { LoginBox } from './LoginBox';
import { Header } from './Header';
import { TopLinks } from './TopLinks';
import { CartBox } from './CartBox';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        const { isLoggedIn, username, photoSrc } = this.props.state;
        return (
            <div>
                {this.props.isLoggedIn ? <CartBox /> : <LoginBox isLoggedIn={isLoggedIn} username={username} photoSrc={photoSrc} />}
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
