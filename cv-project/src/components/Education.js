import React from 'react';
import InputCreation from './InputCreation';

class Education extends React.Component {


    schoolName() {
        return (
            <InputCreation 
                containerName="sName"
                    label="School Name"
                    placeholder="e.g. San Jose State"
                    type="text"
                    cName="schoolName"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    schoolLocation() {
        return (
            <InputCreation 
                containerName="sLocation"
                    label="School Location"
                    placeholder="e.g. San Jose"
                    type="text"
                    cName="schoolLocation"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    degree() {
        return (
            <InputCreation 
                containerName="degreeContainer"
                    label="Degree"
                    placeholder="Select"
                    type="select"
                    cName="degree"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    fieldOfStudy() {
        return (
            <InputCreation 
                containerName="fieldOfStudyContainer"
                    label="Field Of Study"
                    placeholder="e.g. Accountant"
                    type="text"
                    cName="fieldOfStudy"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    graduationStart() {
        return (
            <InputCreation 
                containerName="gradStartContainer"
                    label="Graduation Start Date"
                    placeholder="Select"
                    type="date"
                    cName="gradStart"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    graduationEnd() {
        return (
            <InputCreation 
                containerName="gradEndContainer"
                    label="Graduation End Date"
                    placeholder="Select"
                    type="date"
                    cName="gradEnd"

                    onFocus={(text) => this.props.onFocus(text.target.className)}
                    onBlur={(text) => this.props.onBlur(text.target.className)}
                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }

    currentlyAttend() {
        return (
            <InputCreation 
                containerName="attendStatus"
                    label="I currently attend here"
                    placeholder=""
                    type="checkbox"
                    cName="currentlyAttend"

                    onChange={(text) => this.props.onChange(text.target.value, text)}
            />
        )
    }


    render() {
        return (
            <div className="EducationContainer">
                <h1>Education</h1>
                {this.schoolName()}
                {this.schoolLocation()}
                {this.degree()}
                {this.fieldOfStudy()}
                {this.graduationStart()}
                {this.graduationEnd()}
                {this.currentlyAttend()}
                <button className="educationAdd">
                    Add
                </button> 
                <button className="educationDelete">
                    Delete
                </button>
            </div>
        )
    }
}

export default Education;
