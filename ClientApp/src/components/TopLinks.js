import React, { Component } from 'react';

export class TopLinks extends Component {
    render() {
        return (
            <nav className="topLinks">
                <div className="menuDropdown">
                    <button className="btnMenuDropdown">Menu</button>
                    <div className="menuDropdownContent">
                        <a href="index.html">Home</a>
                        <a href="newmenuitems.html">New Menu Items</a>
                        <a href="pizzas.html">Pizzas</a>
                        <a href="topperstix.html">Topperstix</a>
                        <a href="wings.html">Wings</a>
                        <a href="sidesandextras.html">Sides and Extras</a>
                        <a href="drinks.html">Drinks</a>
                        <a href="desserts.html">Desserts</a>
                    </div>
                </div>
                <a href="catering.html">Catering</a>
                <a href="giftcards.html">Gift Cards</a>
                <a href="locations.html">Locations</a>
            </nav>
        );
    }
}
