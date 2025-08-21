//event listener.
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values entered by the user
    let storedUserName = document.getElementById("user_name").value.trim();
    let storedPassword = document.getElementById("password").value.trim();
    let rememberMe = document.getElementById("remember").checked; // true if box is ticked

    // Grabs the error message container
    let errorMessages = document.getElementById("erroMsg");

    // Reset any previous error message
    errorMessages.textContent = "";

    // checks for username
    if (!storedUserName) {
        errorMessages.textContent = "Username is required";
        errorMessages.style.color = "red";
        errorMessages.style.textAlign = "center";
        errorMessages.style.margin = "10px 0";
        document.getElementById("user_name").focus(); // cursor should point here
        return;
    }

    // checks for password.
    if (!storedPassword) {
        errorMessages.textContent = "password is required";
        errorMessages.style.color = "red";
        errorMessages.style.textAlign = "center";
        errorMessages.style.margin = "10px 0";
        document.getElementById("user_name").focus();
        return;
    }

  // Retrieve stored user data from localStorage (set during signup)
  let storedUser = JSON.parse(localStorage.getItem("userValues"));


// Check if user exists in storage
if (!storedUser) {
  errorMessages.textContent = "No user found! Please signup first.";
  errorMessages.style.color = "red";
  errorMessages.style.textAlign = "center";
} 
// If username does not match
else if (storedUserName !== storedUser.userName) {
  errorMessages.textContent = "Incorrect username!";
  errorMessages.style.color = "red";
  errorMessages.style.textAlign = "center";
  document.getElementById("user_name").focus();
} 
// If password does not match
else if (storedPassword !== storedUser.userPassword) {
  errorMessages.textContent = "Incorrect password!";
  errorMessages.style.color = "red";
  errorMessages.style.textAlign = "center";
  document.getElementById("password").focus();
} 
// If both are correct → login success
else {
  errorMessages.textContent = "Login successful! Redirecting to profile...";
  errorMessages.style.color = "green";
  errorMessages.style.textAlign = "center";


  // Handle "Remember Me" feature
  if (rememberMe) {
    // Save login info in localStorage
    localStorage.setItem("remember", JSON.stringify({ storedUserName, storedPassword }));
  } else {
    // If unchecked, remove remembered user
    localStorage.removeItem("remember");
  } 

// sets errro message empty befor navigating
setTimeout(() => {
  errorMessages.textContent = "";
}, 2000);

  // Redirects after 2 seconds
  setTimeout(function () {
    window.location.href = "profile.html";
  }, 2000);
}


})