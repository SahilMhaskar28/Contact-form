document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerText = "Enter valid email";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.innerText = "Message is required";
        isValid = false;
    }

    if (isValid) {
        showAlert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});

// Show custom alert
function showAlert(message) {
    document.getElementById("alertMessage").innerText = message;
    document.getElementById("customAlert").style.display = "flex";
}

// Close custom alert
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}