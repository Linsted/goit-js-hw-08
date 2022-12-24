import throttle from 'lodash.throttle'

const ourFormREF = document.querySelector('.feedback-form');
const ourForminfo = {};
const emailInput = document.querySelector('[name="email"]')
const messageInput = document.querySelector('[name="message"]')
const parsedObj = JSON.parse(localStorage.getItem('feedback-form-state')) || {email: ``, message:``};



emailInput.value = `${parsedObj.email}`;
messageInput.value = `${parsedObj.message}`;


ourFormREF.addEventListener('input', throttle(onFormInput, 500));
ourFormREF.addEventListener('submit', onFormSubmit);




function onFormInput(e) {
    console.log(ourForminfo);
    ourForminfo[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(ourForminfo))
    

};

function onFormSubmit(e) {
    console.log(parsedObj);
    localStorage.clear()
}

