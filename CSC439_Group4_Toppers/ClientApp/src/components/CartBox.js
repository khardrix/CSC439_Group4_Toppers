import React, { Component } from 'react';


export class CartBox extends Component {
    render() {
        return (
            <div className="divCartBox">
                <h4>Items: </h4>
                <h4>Subtotal: </h4>
                <h4>Tax: </h4>
                <h4>Total: </h4>
            </div>
        );
    }
}


