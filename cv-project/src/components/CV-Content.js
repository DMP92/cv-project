import React from 'react';

function CreateExperience(props) {
        return (
            <div className="cv-main-experience">
                <h2>{ props.userJobTitle }</h2>
                <p className="p1">{ props.employer }</p>
                <p className="p2">{ props.cityOfEmployer }, { props.stateOfEmployer }</p>
                <p className="p3">{ props.dateStart } - { props.dateEnd }</p>
            </div>
        )
}

function CreateEducation(props) {
    return (
        <div className="cv-main-education">
        <p className="eduH2">{props.schoolName}</p>
        <p className="eduP1">{props.schoolLocation}</p>
        <p className="eduP2">{props.degree}</p>
        <p className="eduP3">{props.fieldOfStudy}</p>
        <p className="eduP4">{props.gradStart} - {props.gradEnd}</p>
    </div>
    )
}

export { CreateExperience, CreateEducation };
