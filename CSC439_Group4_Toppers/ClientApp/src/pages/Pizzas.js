import React, { Component } from 'react';

export class Pizzas extends Component {
    render() {
        return (
            <div className="pizzaOrdering">
                <div className="pizzaOrderButtons">
                    <h2>What size crust would you like?</h2>
                    <button type = "button" class = "btnpizzaCrustSize">LARGE 14" (8 SLICES)</button>
                    <button type = "button" class = "btnpizzaCrustSize">MEDIUM 12" (8 SLICES)</button>
                    <button type = "button" class = "btnpizzaCrustSize">SMALL 9" (4 SLICES)</button>
                </div>
            </div>
        );
    }
}
