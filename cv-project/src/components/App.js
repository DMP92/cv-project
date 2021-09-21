import React from 'react';
import { Header, Footer } from './PageLayout';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import '../styles/App.css';
import Education from './Education';
import { CreateExperience, CreateEducation } from './CV-Content';
import { experienceInputObject, experienceInputDelete } from './util';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: 'CV Application',
            cvForm: {
                personalInformationCopy: {
                    firstName: [''],
                    lastName: [''],
                    profession: [''],
                    cityName: [''],
                    stateName: [''],
                    zipCode: [''],
                    phoneNumber: [''],
                    emailAddress: [''],
                },

                experienceInputInfo: {
                    userJobTitle: [''],
                    employer: [''],
                    cityOfEmployer: [''],
                    stateOfEmployer: [''],
                    dateStart: [''],
                    dateEnd: [''],
                    currentlyEmployed: [''],
                },

                educationInputInfo: {
                        schoolName: [''],
                        schoolLocation: [''],
                        degree: [''],
                        fieldOfStudy: [''],
                        gradStart: [''],
                        gradEnd: [''],
                        currentlyAttend: [''],
                },

                experiences: [
                    {
                        userJobTitle: [''],
                        employer: [''],
                        cityOfEmployer: [''],
                        stateOfEmployer: [''],
                        dateStart: [''],
                        dateEnd: [''],
                        currentlyEmployed: [''],
                    }, 
                ],

                education: {
                    schoolName: [''],
                    schoolLocation: [''],
                    degree: [''],
                    fieldOfStudy: [''],
                    gradStart: [''],
                    gradEnd: [''],
                    currentlyAttend: [''],
                },
            },
            footer: 'Footer',
        }
    }
    
    inputFieldHasFocus(ele) {
        const currentInputField = document.querySelector(`.${ele}`);
        const parentOfCurrent = currentInputField.parentElement;
        const labelOfCurrentElement = parentOfCurrent.childNodes[0];

        if (document.activeElement === currentInputField) {
            labelOfCurrentElement.classList.add('currentLabel');
        }
    }

    inputFieldHasLostFocus(ele) {
        const currentInputField = document.querySelector(`.${ele}`);
        const parentOfCurrent = currentInputField.parentElement;
        const labelOfCurrentElement = parentOfCurrent.childNodes[0];
        labelOfCurrentElement.classList.remove('currentLabel');
    }

    saveButtonListener(ele) {
        // const save = document.querySelector('.save');
    }

    personalInformationStateUpdate(data, my) {
        const targetClass = my.target.className;
        const targetText = data;
        // console.log(this.state.cvForm.personalInformationCopy[targetClass])
        this.setState(prevState => ({
            cvForm: {
                ...prevState.cvForm,
                personalInformationCopy: {
                    ...prevState.cvForm.personalInformationCopy,
                    [targetClass]: [...this.state.cvForm.personalInformationCopy[targetClass], targetText],
                }
            }        
        }))
    }

    experienceInputStateUpdate(data, my) {
        const targetClass = my.target.className;
        const targetText = data;    

        this.setState(prevState => ({
            cvForm: {
                ...prevState.cvForm,
                experienceCopy: {
                    ...prevState.cvForm.experienceInputInfo,
                    [targetClass]: [...this.state.cvForm.experienceInputInfo[targetClass], targetText],
                }
            }        
        }))
    }

    educationInputStateUpdate(data, my) {
        const targetClass = my.target.className;
        const targetText = data; 
        
        this.setState(prevState => ({
            cvForm: {
                ...prevState.cvForm,
                educationInputInfo: {
                    ...prevState.cvForm.educationInputInfo,
                    [targetClass]: [...this.state.cvForm.educationInputInfo[targetClass], targetText],
                }
            }        
        }))
    }

    addNewExperience() {
        const exp = experienceInputObject();
        console.log(exp, 'rasta');
        console.log(this.state.cvForm.experiences, 'experience addnew');
        this.setState(prevState => ({
            cvForm: {
                ...prevState.cvForm,
                experiences: [...this.state.cvForm.experiences, { exp }]
            }
        }))

        setTimeout(() => { console.log(this.state.cvForm.experiences, 'newly added'); }, 300);
    }

    mapThroughExperiences() {
        console.log(this.state.cvForm.experiences, 'experience array mapThrough')
        const exp = this.state.cvForm.experiences;
        const freshArray = exp.slice(1);
        
        const printEachExperience = freshArray.map((user) => {
            const index = freshArray.indexOf(user);
            console.log(user, index);
            console.log(user.exp.userJobTitle, 'hee')
            return  ( 
                <CreateExperience 
                    userJobTitle = {user.exp.userJobTitle}
                    employer = {user.exp.employer}
                    cityOfEmployer = {user.exp.cityOfEmployer}
                    stateOfEmployer = {user.exp.stateOfEmployer}
                    dateStart = {user.exp.dateStart}
                    dateEnd = {user.exp.dateEnd}
                    key={index}
                />
            )
        })  

        if (exp.length > 1) {
            return printEachExperience;
        }        
    }

    deleteExperience() {
    }

    addNewEducation() {
        console.log('add education');
        const edu = this.state.cvForm.educationInputInfo;
        <CreateEducation 
            schoolName={edu.schoolName[edu.schoolName.length - 1]}
            schoolLocation={edu.schoolLocation[edu.schoolLocation.length - 1]}
            degree={edu.degree[edu.degree.length - 1]}
            fieldOfStudy={edu.fieldOfStudy[edu.fieldOfStudy.length - 1]}
            gradStart={edu.gradStart[edu.gradStart.length - 1]}
            gradEnd={edu.gradEnd[edu.gradEnd.length - 1]}
        />
    }

    deleteEducation() {
        console.log('delete education');
    }

    render() {
        const user = this.state.cvForm.personalInformationCopy;
        const headH1 = `${user.firstName[user.firstName.length - 1]} ${user.lastName[user.lastName.length - 1]}`;
        const headH2 = `${user.profession[user.profession.length - 1]}`;
        const headPhone = `${user.phoneNumber[user.phoneNumber.length - 1]}`;
        // const headGmail = ' devin.pfromm.20@gmail.com';
        const experience = this.state.cvForm.experienceInputInfo;
        const job = experience.userJobTitle[experience.userJobTitle.length - 1];

        const exp = this.state.cvForm.experiences;
       
        return (
            <div className="appContainer">
                <Header 
                    text={this.state.header}
                />
                    <div className="cv-form">
                        <PersonalInformation 
                            onFocus={(ele) => { this.inputFieldHasFocus(ele); }}
                            onBlur={(ele) => { this.inputFieldHasLostFocus(ele); }} 
                            onChange={(data, target) => { this.personalInformationStateUpdate(data, target) }}
                        />

                        <Experience 
                            onFocus={(ele) => { this.inputFieldHasFocus(ele); }}
                            onBlur={(ele) => { this.inputFieldHasLostFocus(ele); }}
                            onChange={(data, target) => { this.experienceInputStateUpdate(data, target) }}
                            onClick={() => { this.addNewExperience(exp) }}
                            onMouseDown={this.deleteExperience()}
                        />
                        
                        <Education 
                            onFocus={(ele) => { this.inputFieldHasFocus(ele); }}
                            onBlur={(ele) => { this.inputFieldHasLostFocus(ele); }}
                            onChange={(data, target) => { this.educationInputStateUpdate(data, target) }}
                        />
                        <h1 className="finalizeForm">Finalize</h1>
                        <div className="buttonContainer">
                            <button 
                                className="edit"
                            >
                                Edit
                            </button>
                            
                            <button 
                                className="save" 
                                onClick={() => this.saveButtonListener()}
                            >
                                Save
                            </button>

                            <button 
                                className="preview"
                            >
                                PDF Preview
                            </button>
                        </div>
                    </div>

                   
                    <div className="cv-container">
                        <div className="cv-preview">
                            <div className="cv-head">
                                <h1 className="cv-head-h1">{headH1}</h1>
                                <h2 className="cv-head-h2">{headH2}</h2>
                                <h2 className="cv-head-contact">
                                    {headPhone}
                                </h2>
                            </div>

                            <div className="cv-side">
                                <div className="side-details">
                                    <div className="side-header">
                                        <h2>Contact Info</h2>
                                    </div>
                                    <div className="side-main">
                                        <p className="details-address">{user.cityName[user.cityName.length - 1]}, {user.stateName[user.stateName.length - 1]}, {user.zipCode[user.zipCode.length - 1]}</p>
                                        <p className="details-phone">{user.phoneNumber[user.phoneNumber.length - 1]}</p>
                                        <p className="details-email">{user.emailAddress[user.emailAddress.length - 1]}</p>
                                    </div>
                                </div>
                            </div>

                                <div className="cv-main">
                                    {this.mapThroughExperiences(exp)}
                                    
                                    <h1 className="cv-preview-h1">Education</h1>
                                  
                                </div>

                            <div className="cv-main">

                            </div>
                        </div>
                    </div>

                <Footer 
                    text={this.state.footer}
                />

            </div>
        )
    }
}
//  {/* {personal.firstName[personal.firstName.length - 1]} {personal.lastName[personal.lastName.length - 1]} */}
//                     {/* {education.schoolName[education.schoolName.length - 1]} */}

                    // separate the logic for the education and experiences into a different module and import them
export default App;