import React, { Component } from 'react';

export class GiftCards extends Component {
    render() {
        return (
            <div id="giftcardContent">
                <h2>GIFT CARDS</h2>

                <p>Obviously you get what good pizza is. Share the secret only (AND WE MEAN ONLY) with the friends who actually deserve to know too. Add as much or as little as you’d like to a Toppers Gift Card, available in any amount and redeemable at any location, and hand it over to the real deservers of delicious. And when they’ve spent all the dough, send them back here to recharge that bad boy, and refuel later.
                </p>

                <div id="giftcardOrderLogoCheck">
                    <div id="giftcardOrderButtonDiv">
                        <a href="https://topperspizzastore.mybrightsites.com/products/154222" target="_blank">
                            <button>BUY GIFT CARDS</button>
                        </a>
                    </div>

                    <div id="giftcardLogoContainer">
                        <img src="/Images/IMG_Logo_GiftCard.png" alt="gift card logo" />
                    </div>

                    <div id="giftcardCheckButtonDiv">
                        <a href="https://wbiprod.storedvalue.com/WBI/lookupservlet?language=en" target="_blank">
                            <button>CHECK YOUR BALANCE</button>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}