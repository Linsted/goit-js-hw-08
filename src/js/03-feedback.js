import throttle from 'lodash.throttle'


console.log(4);


const ourFormREF = document.querySelector('.feedback-form');
let ourForminfo = {};


initform();
ourFormREF.addEventListener('submit', onFormSubmit);
ourFormREF.addEventListener('input', throttle(onFormInput, 500));


function onFormInput(e) {
    ourForminfo[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(ourForminfo))

};

function onFormSubmit(e) {
    e.preventDefault();
    ourForminfo = {};
    localStorage.removeItem('feedback-form-state')
    
    console.log(ourForminfo);
    const formData = new FormData(ourFormREF);
    formData.forEach((value, name) =>
    {   console.log(value);
        console.log(name);
        ourFormREF.elements[name].value = ``;

    })

    
}


function initform(e) {
    let parsedObj = localStorage.getItem('feedback-form-state');

    if (parsedObj) {
        parsedObj = JSON.parse(parsedObj)
        
        Object.entries(parsedObj).forEach(([name, value]) => {
            console.log(name, value);
            ourForminfo[name] = value;
            ourFormREF.elements[name].value = value;
            
        });
         
    }

}