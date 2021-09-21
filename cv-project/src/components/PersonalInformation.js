import React from 'react';
import InputCreation from './InputCreation';
import '../styles/PersonalInformation.css';

class PersonalInformation extends React.Component {
    firstName() {
        return (
            <InputCreation 
                containerName="headFName"
                    label="First Name"
                    placeholder="e.g John"
                    type="text"
                    cName="firstName"
                    
                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    lastName() {
        return (
            <InputCreation 
                containerName="headLName"
                    label="Last Name"
                    placeholder="e.g Smith"
                    type="text"
                    cName="lastName"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }
    
    profession() {
        return (
            <InputCreation
                containerName="headProfession"
                    label="Profession"
                    placeholder="e.g. Accountant"
                    type="text"
                    cName="profession"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    city(cityName) {
        return (
            <InputCreation 
                containerName="city"
                    label="City"
                    placeholder="e.g. Los Angeles"
                    text={cityName}
                    type="text"
                    cName="cityName"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    stateName() {
        return (
            <InputCreation 
                containerName="state"
                    label="State/Province"
                    placeholder="e.g. California"
                    type="text"
                    cName="stateName"
                
                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    zip() {
        return (
            <InputCreation 
                containerName="zip"
                    label="Zip Code"
                    placeholder="e.g. 12345"
                    type="text"
                    cName="zipCode"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    phone() {
        return (
            <InputCreation 
                containerName="phone"
                    label="Phone Number"
                    placeholder="e.g. 123-867-5309"
                    type="text"
                    cName="phoneNumber"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}

            />
        )
    }

    email() {
        return (
            <InputCreation 
                containerName='email'
                    label="Email Address"
                    placeholder="e.g. johnsmith@gmail.com"
                    type="text"
                    cName="emailAddress"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    render() {
        return (
            <div className="form-head">
                <h1>Personal Information</h1>
                {this.firstName()}
                
                {this.lastName()}
                
                {this.profession()}
                
                {this.city()}
                
                {this.stateName()}

                {this.zip()}

                {this.phone()}
            
                {this.email()}
            </div>
        )
    }
}

export default PersonalInformation;
