import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div class="aboutToppers">
                <h2 id="ABOUT_H2">ABOUT TOPPERS</h2>

                <div class="aboutPicContainer1">
                    <img src="/images/IMG_About_Pic1.png" alt="Toppers employee on About page"
                        class="aboutPics" />
                </div> 

                <p class="aboutP"><br /><br /><br /><br />
                    That’s because at Toppers Pizza we believe decisions about what goes into your pizza should be 
                    made in a kitchen, not a boardroom. In fact, we don’t just believe it—we live it. 
                    Ask anyone on Team Toppers and they’ll tell you:
                    <br /><br /><br /><br /><br /><br />
                </p>

                <div class="aboutPicContainer2">
                    <img src="/images/IMG_About_Pic2.png" alt="Toppers employee on About page"
                        class="aboutPics" />
                </div>

                <p class="aboutP"><br /><br /><br />
                    Those details begin with a friendly face, making dough fresh daily and insisting on real 
                    Wisconsin cheese (and nothing but real Wisconsin cheese), and they don’t stop until we’ve 
                    double-checked your order and run (literally run) to your door so the food is still hot.
                    Some place “corporate” might say we do this by sticking to a set of core values. Maybe so, 
                    but at Toppers, it’s just who we are. We:
                    <br /><br /><br /><br />
                </p>

                <p class="aboutP" id = "aboutBottomP"><br /><br />
                    Our belief in doing pizza right—respecting pizza—has been central to Toppers since before 
                    we even opened our doors. And we’re not the only ones who feel this way. See how Toppers 
                    has caught on over the years:
                    <br /><br />
                </p> 
            </div>
        );
    }
}