function setMessage(element, msg, isError) {

    let subtext = document.getElementById('subtext-' + element.id);

    if (isError){
        subtext.className = 'form-text error';
        element.setCustomValidity(msg);
    } else {
        subtext.className = 'form-text';
        element.setCustomValidity('');
    }
    subtext.innerText = msg;

}
function charactersValidate(element) {

    let isValidate = false;

    for (let char of element.value){

        if ((char >= 'a' && char <= 'z')
        ||(char >= 'A' && char <= 'Z')
        ||(char >= '0' && char <= '9')){
            isValidate = true;
        }

    }

    return isValidate;

}

function formValidate(formName) {

    let isFormValidate = true;

    for(let element of inputs){
        if(element.id.includes(formName)){
            if(!element.checkValidity()){
                isFormValidate = false;
                break;
            }
        }
    }

    return isFormValidate;
}

function emailValidate(event) {

    let email = event.target;
    email.setCustomValidity('');

    if (email.value === ''){
        setMessage(email, 'Заполните это поле.', true);
    } else if (email.validity.valid){
        setMessage(email, 'Лягухи одобряют!', false);
    } else {
        setMessage(email, email.validationMessage, true);
    }

}
function passValidate(event) {

    let pass = event.target;
    pass.setCustomValidity('');

    if (pass.value === '') {
        setMessage(pass, 'Заполните это поле.', true);
    } else if(pass.value.length <= 4){
        setMessage(pass, 'Пароль должен быть больше 5 символов.', true);
    } else if (!charactersValidate(pass)) {
        setMessage(pass, 'Пароль должен содержать латинские буквы и цифры.', true);
    } else {
        setMessage(pass, 'Лягухи одобряют!', false);
    }

}
function loginValidate(event) {

    let login = event.target;
    login.setCustomValidity('');

    if (login.value === '') {
        setMessage(login, 'Заполните это поле.', true);
    } else if(login.value.length <= 4){
        setMessage(login, 'Логин должен быть больше 5 символов.', true);
    } else if (!charactersValidate(login)) {
        setMessage(login, 'Логин должен содержать латинские буквы и цифры.', true);
    } else {
        setMessage(login, 'Лягухи одобряют!', false);
    }
}
function checkboxValidate(event) {

    let checkbox = event.target;
    checkbox.setCustomValidity('');

    if (checkbox.validity.valid){
        setMessage(checkbox, '', false);
    } else {
        setMessage(checkbox, checkbox.validationMessage, true);
    }
}
function blockedSubmitForm(event) {

    let submit = event.target;
    submit.setCustomValidity('');
    let isFormValidate;

    if (submit.id.includes('reg')){
        isFormValidate = formValidate('reg');
    } else if (submit.id.includes('auth')){
        isFormValidate = formValidate('auth');
    }

    if (!isFormValidate){
        event.preventDefault()
    }

}

let inputs = document.querySelectorAll('input[type]');

for (let element of inputs ){

    element.setCustomValidity('SpecialError');

    if (element.id.includes('email')){
        element.addEventListener('input', emailValidate, false);
        element.addEventListener('invalid', emailValidate, false);
    } else if (element.id.includes('pass')){
        element.addEventListener('input', passValidate, false);
        element.addEventListener('invalid', passValidate, false);
    }else if (element.id.includes('login')){
        element.addEventListener('input', loginValidate, false);
        element.addEventListener('invalid', loginValidate, false);
    }else if (element.id.includes('checkbox')){
        element.addEventListener('click', checkboxValidate, false);
        element.addEventListener('invalid', checkboxValidate, false);
    }else if (element.id.includes('submit')){
        element.addEventListener('click', blockedSubmitForm, false);
    }
}
