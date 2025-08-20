//Adds event listener for form submission

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //gets the selected role (Patient or Doctor)
    let role = document.querySelector('input[name="role"]:checked');

    // getting values from input fields
    let userName = document.getElementById("name").value.trim();
    let userEmail = document.getElementById("email").value.trim();
    let userPassword = document.getElementById("password").value.trim();
    let userConfirmPassword = document.getElementById("confirm-password").value.trim();
    let erroMessage = document.getElementById("erroMsg");

    //checks if a role was selected
    if (!role) {
        erroMessage.textContent = "Please select a role (Patient or Doctor)";
        erroMessage.style.color = "red";
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";
        return;
    }

    //displays error message when input fileds are empty
    if (!userName || !userEmail || !userPassword || !userConfirmPassword) {
        erroMessage.textContent = "All fields are required"
        erroMessage.style.color = "red"
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";


        // Focus the first empty field
        if (!userName) document.getElementById("name").focus();
        else if (!userEmail) document.getElementById("email").focus();
        else if (!userPassword) document.getElementById("password").focus();
        else document.getElementById("confirm-password").focus();
    }

    // Defines regex patterns
    let userNameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/; // Full name only: at least two words, each starting with uppercase followed by lowercase letters
    let userEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 
    let userPasswordRegex = /^[A-Za-z0-9]{4,}$/; // Password: at least 4 chars, letters and numbers allowed

    //ensures validation check 
    if (!userNameRegex.test(userName)) {
        erroMessage.textContent = " Enter your full name(e.g, Tony Eze)";
        erroMessage.style.color = "red";
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";
        return;
    }
    if (!userEmailRegex.test(userEmail)) {
        erroMessage.textContent = "Please enter a valid Email";
        erroMessage.style.color = "red";
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";
        return;
    }
    if (!userPasswordRegex.test(userPassword)) {
        erroMessage.textContent = "Enter password: must be at least 4 characters";
        erroMessage.style.color = "red";
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";
        return;
    }
    if (userConfirmPassword !== userPassword) {
        erroMessage.textContent = "Password does not match";
        erroMessage.style.color = "red";
        erroMessage.style.textAlign = "center";
        erroMessage.style.margin = "10px 0";
        return;
    }
    erroMessage.textContent = "";

    let userValues = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        role: role.value // Save the selected role (Patient or Doctor)
    };

    // Save user object into localStorage as JSON string
    localStorage.setItem("userValues", JSON.stringify(userValues));


    // Show success message in green
    erroMessage.textContent = "Signup successful! Redirecting to login...";
    erroMessage.style.color = "green";
    erroMessage.style.textAlign = "center";
    erroMessage.style.margin = "10px 0";

    // Redirect to login page after 2 seconds
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2000);


});