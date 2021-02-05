const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");


//Show error icon and message
function showError(input, message) {
    const cardInput = input.parentElement;
    cardInput.className = 'card__input error';
    const small = cardInput.querySelector('small');
    small.innerText = message;
}

//Show success
function showSuccess(input) {
    const cardInput = input.parentElement;
    cardInput.className = 'card__input success';
}

//Validate email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (firstname.value === '') {
        showError(firstname, 'First Name cannot be empty');
    }   else {
        showSuccess(firstname);
    }

    if (lastname.value === '') {
        showError(lastname, 'Last Name cannot be empty');
    }   else {
        showSuccess(lastname);
    }

    if (email.value === '') {
        showError(email, 'Email address cannot be empty');
    }   else if (!isValidEmail(email.value)) {
        showError(email, 'Looks like this is not an email')
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password cannot be empty');
    }   else {
        checkLength(password, 8);
    }

});

//Check password length
function checkLength(input, min) {
    if(input.value.length < min) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be at least ${min} characters`);
    } else {
        showSuccess(password);
    }
}
