import React, { Component } from 'react';

export class SocialMediaLinks extends Component {
    render() {
        return (
            <div id="socialMedia">
                <nav className="socialMediaNav">
                    <a className="socialMediaLink" href="https://www.facebook.com/ToppersRocks" target="_blank">
                        <img className="socialMediaIcon" src="/images/IMG_SOCIALMEDIA_Facebook.png" alt="Facebook logo" />
                    </a>
                    <a className="socialMediaLink" href="https://twitter.com/topperspizza" target="_blank">
                        <img className="socialMediaIcon" src="/images/IMG_SOCIALMEDIA_Twitter.png" alt="Twitter logo" />
                    </a>
                    <a className="socialMediaLink" href="https://www.instagram.com/topperspizza/" target="_blank">
                        <img className="socialMediaIcon" src="/images/IMG_SOCIALMEDIA_Instagram.png" alt="Instagram logo" />
                    </a>
                    <a className="socialMediaLink" href="https://www.youtube.com/user/MyToppersPizza/" target="_blank">
                        <img className="socialMediaIcon" src="/images/IMG_SOCIALMEDIA_YouTube.png" alt="YouTube logo" />
                    </a>
                </nav>
            </div>
        );
    }
}
