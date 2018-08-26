// const React = require('react');

import React, { Component } from 'react';
import NameControl from './name-control.jsx';
import GenderControl from './gender-control.jsx';
import IncomeSources from './income-sources-control.jsx';
import CountriesBox from './countries-control';
import AddressBox from './address-control';

import ReviewLoanForm from './review-loan-form.jsx';

class LoanForm extends Component {
    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleIncomeGroupChange = this.handleIncomeGroupChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);


        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            genderGroup: {
                male: true,
                female: false
            },
            incomeGroup: {
                salary: false,
                personalBusiness: false,
            },
            country: 'Pakistan',
            address: ''
        };
    }

    handleFirstNameChange(event) {
        this.setState({ firstNameValue: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastNameValue: event.target.value });
    }

    handleGenderChange(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ genderGroup: obj });
    }

    handleIncomeGroupChange(event) {
        var incomeGroup = Object.assign(this.state.incomeGroup);
        incomeGroup[event.target.value] = event.target.checked;

        this.setState({ incomeGroup: incomeGroup });
    }
    handleCountryChange(event) {
        this.setState({ country: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }

    handleFormSubmit(event) {

    }

    render() {

        return <div>
            <form onSubmit={this.handleFormSubmit}>
                <legend>
                    <h2>Welcome to react forms</h2>
                    <p>Please fill in the following loan form</p>
                </legend>
                <fieldset>
                    <div>
                        <NameControl
                            firstNameName="firstName"
                            firstNameId="firstName"
                            onFirstNameChange={this.handleFirstNameChange}
                            firstNameLabel="First name"
                            firstNameValue={this.state.firstNameValue}
                            firstNamePlaceHolder="First name"

                            lastNameName="lastName"
                            lastNameId="lastName"
                            onLastNameChange={this.handleLastNameChange}
                            lastNameLabel="Last name"
                            lastNameValue={this.state.lastNameValue}
                            lastNamePlaceHolder="Last name" />
                        <br />
                        <GenderControl
                            genderName="gender"
                            genderId="gender"
                            onGenderChange={this.handleGenderChange}
                            genderGroup={this.state.genderGroup}
                        />
                        <br />
                        <IncomeSources
                            incomeGroup={this.state.incomeGroup}
                            onIncomeGroupChange={this.handleIncomeGroupChange}
                        />
                        <br />
                        <CountriesBox
                            onChange={this.handleCountryChange}
                            value={this.state.country}
                        />
                        <br />
                        <AddressBox
                            onChange={this.handleAddressChange}
                            value={this.state.address}
                            placeholder="Enter your stree address"
                        />

                        <br />
                        <input type="button" value="Save" onClick={this.handleFormSubmit} />
                    </div>
                </fieldset>
            </form>
            <br />
            <div>
                <h2>Review loan form!</h2>
            </div>
            <div>
                <ReviewLoanForm
                    name={this.state.firstNameValue + " " + this.state.lastNameValue}
                    gender={this.state.genderGroup}
                    incomeSources={this.state.incomeGroup}
                    country={this.state.country}
                    address={this.state.address}
                />
            </div>
        </div>
    }
}

export default LoanForm;