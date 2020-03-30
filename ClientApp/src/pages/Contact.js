import React, { Component } from 'react';
import emailjs from 'emailjs-com';
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';


export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactReason: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            aptNumber: "",
            city: "",
            usState: "",
            zipCode: "",
            message: ""
        };

        // this.onSubmit = this.onSubmit.bind(this);
        // this.change = this.change.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        alert('Contact Reason is: ' + this.state.contactReason + '\nFull Name is: ' + this.state.fullName +
            '\nEmail is: ' + this.state.email + '\nPhone Number is: ' + this.state.phoneNumber + '\nAddress is: ' +
            this.state.address + '\nApartment Number is: ' + this.state.aptNumber + '\nCity is: ' +
            this.state.city + '\nUS State is: ' + this.state.usState + '\nZip Code is: ' + this.state.zipCode +
            '\nMessage is: ' + this.state.message);
     

        this.resetForm();

        /*
        fetch('http://localhost:44347/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
        */
        /*
        const { contactReason, fullName, email, phoneNumber, address, aptNumber, city, usState, zipCode, message } = this.state;

        let templateParams = {
            from_name: email,
            to_name: 'csc439toppers',
            subject: contactReason,
            message_html: message,
        }

        

        
        emailjs.send(
            'gmail',
            'template_2KGbKcIW',
            templateParams,
            'user_XQwrhYHyeTJCE66Si2WVK'
        )
        */
        /*const templateId = 'template_2KGbKcIW';*/
    /*this.sendFeedback(templateId, { message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email })*/
        /*
        axios({
            method: "POST",
            url: "http://localhost:44347/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
        */
    }

    resetForm() {
        this.setState({
            contactReason: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            aptNumber: "",
            city: "",
            usState: "",
            zipCode: "",
            message: ""
        })
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };


    render() {
        return (
            <div id="contactPageContainer">

                <h2>CONTACT US</h2>
                <br />
                <p>When it comes to food and service, we strive to be the best. So we'd love to hear about your experience, 
                    your food and your plans for later. <br />Message us below.
                </p>

                <div id="contactPageUnderHeader">
                    <div id="frmContainer">
                        <form id="frmContact">
                            <div class="frmContactContactReasonSelectDiv">
                                <label for="contactReason">*Reason For Contact:</label>
                                <select
                                    name="contactReason"
                                    placeholder="Please select the reason you are contacting us today from the drop down list"
                                    value={this.state.contactReason}
                                    onChange={e => this.change(e)}
                                >
                                    <option value="I had a poor experience or problem I'd like to bring it to your attention">
                                        I had a poor experience or problem I'd like to bring it to your attention
                                    </option>
                                    <option value="I want to give props/praise">
                                        I want to give props/praise
                                    </option>
                                    <option value="I am looking for Franchising information">
                                        I am looking for Franchising information
                                    </option>
                                    <option value="I have a general comment to share">
                                        I have a general comment to share
                                    </option>
                                    <option value="I have feedback to share about your website">
                                        I have feedback to share about your website
                                    </option>
                                    <option value="I have a menu suggestion">
                                        I have a menu suggestion
                                    </option>
                                    <option value="I have a question and/or request">
                                        I have a question and/or request
                                    </option>
                                </select>
                            </div>
                            <br />
                            <div id="frmContactFullNameDiv">
                                <label for="fullName">*Full Name:</label>
                                <input
                                    id="frmContactFullNameInput"
                                    name="fullName"
                                    placeholder="example: John Smith"
                                    value={this.state.fullName}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <br />
                            <div id="frmContactEmail">
                                <label for="email">*Email:</label>
                                <input
                                    name="email"
                                    placeholder="example: johnsmith@example.com"
                                    value={this.state.email}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <div id="frmContactPhoneNumber">
                                <label for="phoneNumber">*Phone Number:</label>
                                <input
                                    name="phoneNumber"
                                    placeholder="don't format # - example: 123456789"
                                    value={this.state.phoneNumber}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <br />
                            <div id="frmContactAddressInput">
                                <label for="address">*Address:</label>
                                <input
                                    name="address"
                                    placeholder="example: 1234 Main Street"
                                    value={this.state.address}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <div id="frmContactAptNumberInput">
                                <label for="aptNumber">Apt #:</label>
                                <input
                                    name="aptNumber"
                                    placeholder="*If applicable - example: 3A"
                                    value={this.state.aptNumber}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <br />
                            <div id="frmContactCityStateZip">
                                <div id="frmContactCity">
                                    <label for="city">*City</label>
                                    <input
                                        name="city"
                                        placeholder="example: Cincinnati"
                                        value={this.state.city}
                                        onChange={e => this.change(e)}
                                    />
                                </div>
                                <div id="frmContactStateSelect">
                                    <label for="usState">*State:</label>
                                    <select id="frmUSState"
                                        name="usState"
                                        placeholder="State"
                                        value={this.state.usState}
                                        onChange={e => this.change(e)}
                                    >
                                        <option value="AL">AL</option>
                                        <option value="AK">AK</option>
                                        <option value="AZ">AZ</option>
                                        <option value="AR">AR</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="IA">IA</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="ME">ME</option>
                                        <option value="MD">MD</option>
                                        <option value="MA">MA</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MS">MS</option>
                                        <option value="MO">MO</option>
                                        <option value="MT">MT</option>
                                        <option value="NE">NE</option>
                                        <option value="ND">ND</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NY">NY</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VT">VT</option>
                                        <option value="VA">VA</option>
                                        <option value="WA">WA</option>
                                        <option value="WV">WV</option>
                                        <option value="WI">WI</option>
                                        <option value="WY">WY</option>
                                    </select>
                                </div>
                                <div id="frmContactZipCode">
                                    <label for="zipCode">*Zip Code:</label>
                                    <input
                                        name="zipCode"
                                        placeholder="example: 45030"
                                        value={this.state.zipCode}
                                        onChange={e => this.change(e)}
                                    />
                                </div>
                            </div>
                            <br />
                            <div id="frmContactTextarea">
                                <label for="frmtxtAreaMessage">*Message:</label>
                                <textarea id="frmtxtAreaMessage" rows="4" cols="65"
                                    name="message"
                                    placeholder="Message (example: The food was wonderful!)"
                                    value={this.state.message}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <br />
                            <button id="btn_contactUsFormSubmit" onClick={e => this.onSubmit(e)}>Submit</button> 
                        </form>
                    </div >

                    <div id="contactInformation">
                        <h3>TOPPERS WORLD HEADQUARTERS</h3>
                        <p>Phone: (262)473-6666</p>
                        <p>Old-School Fax: (262)473-6697</p>
                        <p>Address: 333 W. Center St.</p>
                        <p>Whitewater, WI 53190</p>
                    </div>
                </div>    
            </div>
        );
    }
}
