import React, { Component } from 'react';


export class CartBox extends Component {
    render() {
        return (
            <div className="divCartBox">
                <h3>Items: </h3>
                <h4>Subtotal: </h4>
                <h5>Tax: </h5>
                <h6>Total: </h6>
            </div>
        );
    }
}


