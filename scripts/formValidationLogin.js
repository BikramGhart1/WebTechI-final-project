document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email');
    const username = document.getElementById('username');

    const emailRegex = /^[a-zA-Z0-9._+%-]+@(gmail|hotmail)\.com$/
    const usernameRegex = /^[a-zA-Z\d!@#$%^&*()]{2,}$/

    if (emailRegex.test(email.value)) {
        alert("Wrong wmail format");
        email.style.borderColor = "red";
    } else if (usernameRegex.test(username.value)) {
        alert("Invalid username");
        username.style.borderColor = "red";
    } else {
        alert("Login successful");
        window.location.href = "../index.html";
    }
})