function experienceInputDelete(inputType) {
    const title = document.querySelector('.userJobTitle');
    const company = document.querySelector('.employer');
    const city = document.querySelector('.cityOfEmployer');
    const state = document.querySelector('.stateOfEmployer');
    const start = document.querySelector('.dateStart');
    const end = document.querySelector('.dateEnd');
    const current = document.querySelector('.currentlyEmployed');

    title.value = '';
    company.value = '';
    city.value = '';
    state.value = '';
    start.value = '';
    end.value = '';
    current.value = '';
}

function experienceInputObject() {
    const title = document.querySelector('.userJobTitle');
    const company = document.querySelector('.employer');
    const city = document.querySelector('.cityOfEmployer');
    const state = document.querySelector('.stateOfEmployer');
    const start = document.querySelector('.dateStart');
    const end = document.querySelector('.dateEnd');
    const current = document.querySelector('.currentlyEmployed');

    const experienceObject = {
        userJobTitle: title.value,
        employer: company.value,
        cityOfEmployer: city.value,
        stateOfEmployer: state.value,
        dateStart: start.value,
        dateEnd: end.value,
        currentlyEmployed: current.value,
    }

    experienceInputDelete();
    return experienceObject;
}

export { experienceInputObject, experienceInputDelete };
