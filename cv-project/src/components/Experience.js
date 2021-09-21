import React from 'react';
import InputCreation from './InputCreation';

class Experience extends React.Component {
    jobTitle() {
        return (
            <InputCreation 
                containerName="jobTitle"
                    label="Job Title"
                    placeholder="e.g. Managerial accountant"
                    type="text"
                    cName="userJobTitle"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    employer() {
        return (
            <InputCreation 
                containerName="employerName"
                    label="Employer"
                    placeholder="e.g. A & B Accounting"
                    type="text"
                    cName="employer"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    employerCity() {
        return (
            <InputCreation 
                containerName="employerCity"
                    label="City"
                    placeholder="e.g. Los Angeles"
                    type="text"
                    cName="cityOfEmployer"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    employerState() {
        return (
            <InputCreation 
                containerName="employerState"
                    label="State"
                    placeholder="e.g. California"
                    type="text"
                    cName="stateOfEmployer"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    startDate() {
        return (
            <InputCreation 
                containerName="startDate"
                    label="Start Date"
                    placeholder="Select"
                    type="date"
                    cName="dateStart"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    endDate() {
        return (
            <InputCreation 
                containerName="endDate"
                    label="End Date"
                    placeholder="Select"
                    type="date"
                    cName="dateEnd"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    currentlyEmployed() {
        return (
            <InputCreation 
                containerName="employedContainer"
                    label="I'm currently employed here"
                    type="checkbox"
                    cName="currentlyEmployed"

                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    render() {
        return (
            <div className="Experience">
                <h1>Experience</h1>  
                {this.jobTitle()}
                {this.employer()}
                {this.employerCity()}
                {this.employerState()}
                {this.startDate()}
                {this.endDate()}
                {this.currentlyEmployed()}
                <button 
                    className="experienceAdd"
                    onClick={this.props.onClick}
                    >
                    Add
                </button> 
                <button 
                    className="experienceDelete"
                    onMouseDown={this.props.onMouseDown}

                    >
                    Delete
                </button>
            </div>
        )
    }
}

export default Experience;