import React, { Component } from 'react';

export default class Form extends React.Component {
    state = {
        contactReason: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        aptNumber: "",
        city: "",
        usState: "",
        zipCode: "",
        message: "",
    }


    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    onSubmit = (e) => {
        e.preventDefault();
        alert(this.state);
        /*console.log(this.state);*/ T// This is the code from the tutorial
        this.props.onSubmit(this.state);
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
            message: "",
        });
    }


    render() {
        return {
            <div id = "frmContainer" >
                <form id="frmContact">
                    <div class="frmContactContactReason">
                        <label>*Reason For Contact:</label>
                        <select id="frmContactReason"
                            name="contactReason"
                            placeholder="Please select the reason you are contacting us today from the drop down list"
                            value={this.state.contactReason}
                            onChange={e => this.change(e)}
                        />
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
                    <input
                        name="fullName"
                        placeholder="Full Name (example: John Smith)"
                        value={this.state.fullName}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="email"
                        placeholder="Email (example: johnsmith@example.com)"
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <input
                        name="phoneNumber"
                        placeholder="Phone Number (don't format number. example: 123456789)"
                        value={this.state.phoneNumber}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="address"
                        placeholder="Street Address (example: 1234 Main Street)"
                        value={this.state.address}
                        onChange={e => this.change(e)}
                    />
                    <input
                        name="aptNumber"
                        placeholder="Apartment Number (*Leave blank if does not apply* / example: 3A)"
                        value={this.state.aptNumber}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="city"
                        placeholder="City (example: Cincinnati)"
                        value={this.state.city}
                        onChange={e => this.change(e)}
                    />
                    <div id="frmContactStateSelect">
                        <label>State:</label>
                        <select id="frmUSState"
                            name="usState"
                            placeholder="State"
                            value={this.state.usState}
                            onChange={e => this.change(e)}
                        />
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
                    </div >
                    <input
                        name="zipCode"
                        placeholder="Zip Code (example: 45030)"
                        value={this.state.zipCode}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <textarea id="frmtxtAreaMessage" rows="4" cols="65"
                        name="message"
                        placeholder="Message (example: The food was wonderful!)"
                        value={this.state.message}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <button id="btn_contactUsFormSubmit" onClick={e => this.onSubmit(e)}>Submit</button>
                </form >    
            </div >


            /*
            <div id = "frmContainer">
                <form id = "frmContactUs">

                    /* Need drop down for Reason for contact here */
            /*
                    <div class = "frmContactContactReason">
                        <label>*Reason For Contact:</label>
                        <select id="frmContactReason"
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

                    <input
                        name="fullName"
                        placeholder="Full Name (example: John Smith)"
                        value={this.state.fullName}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        name="email"
                        placeholder="Email (example: johnsmith@example.com)"
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />

                    <input
                        name="phoneNumber"
                        placeholder="Phone Number (don't format number. example: 123456789)"
                        value={this.state.phoneNumber}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        name="address"
                        placeholder="Street Address (example: 1234 Main Street)"
                        value={this.state.address}
                        onChange={e => this.change(e)}
                    />

                    <input
                        name="aptNumber"
                        placeholder="Apartment Number (*Leave blank if does not apply* / example: 3A)"
                        value={this.state.aptNumber}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        name="city"
                        placeholder="City (example: Cincinnati)"
                        value={this.state.city}
                        onChange={e => this.change(e)}
                    />

                    /* Need drop down for State here */
            /*
                    <label>State:</label>
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

                    <input
                        name="zipCode"
                        placeholder="Zip Code (example: 45030)"
                        value={this.state.zipCode}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    textarea id="frmtxtAreaMessage" rows="4" cols="65"
                        name="message"
                        placeholder="Message (example: The food was wonderful!)"
                        value={this.state.message}
                        onChange = { e => this.change(e) }
                    />

                    /* Submit button */
            /*
                    <button id="btn_contactUsFormSubmit" onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
            */
        };
    }
}

