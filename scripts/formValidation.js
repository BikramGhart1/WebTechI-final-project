
document.getElementById('signUpForm').addEventListener('submit', validateForm);

function validateForm(event) {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const hobbies = document.querySelectorAll('input[name="hobby"]');
    let isChecked = false;
    hobbies.forEach(hobby => {
        if (hobby.checked) {
            isChecked = true;
            return;
        }
    })

    event.preventDefault();

    nameRegex = /^[a-zA-Z0-9]{2,}$/
    usernameRegex = /^[\w\W]{3,}$/
    emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail)\.com$/
    passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@*$!%?&])[a-zA-Z\d@*$!%?&]{8,}$/


    if (!nameRegex.test(firstname.value)) {
        alert("Firstname cannont be smaller than 2 letters");
        firstname.style.borderColor = "red";
    } else if (!nameRegex.test(lastname.value)) {
        alert("Lastname cannot be smaller than 2 letters");
        lastname.style.borderColor = "red";

    } else if (!isChecked) {
        alert("please chose atleast one hobby!");
    }
    else if (!emailRegex.test(email.value)) {
        alert("Incorrect email format");
        email.style.borderColor = "red";

    } else if (!usernameRegex.test(username.value)) {
        alert("Username can't be less than 2 chaaracters");
        username.style.borderColor = 'red';
    }
    else if (!passwordRegex.test(password.value)) {
        alert("Password conditions not satisfied");
        password.style.borderColor = "red";
    }
    else {
        alert("Form submitted Successfully");
        window.location.href = '../index.html';
    }
}

