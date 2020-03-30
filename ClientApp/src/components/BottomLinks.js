import React, { Component } from 'react';

export class BottomLinks extends Component {
    render() {
        return (
            <footer>
                <nav className="bottomLinks">
                    <div className="careerDropdown">
                        <button className="btnCareerDropdown">Career</button>
                        <div className="careerDropdownContent">
                            <a href="https://www.toppers.com/Portals/0/Documents/Toppers_Application.pdf" target="_blank">Apply</a>
                            <a href="http://www.toppersfranchise.com/" target="_blank">Own a Franchise</a>
                        </div>
                    </div>
                    <a href="about.html">About</a>
                    <a href="openingevents.html">Grand Opening Events</a>
                    <a href="fundraising.html">Fundraising</a>
                    <a href="merch.html">Topper's Merch</a>
                    <a href="https://www.toppers.com/Portals/0/Pages/Allergens/Toppers%20Pizza%20Common%20Allergens1.pdf" target="_blank">Allergens</a>
                    <a href="contact.html">Contact</a>
                </nav>

                <div id="copyright">&copy; 2020: Dylan Damico, Ryan Huffman, Mikaela Perez, Micah Sidebottom</div>
            </footer>
        );
    }
}
