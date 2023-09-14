// script.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the login form
    var loginForm = document.getElementById("loginForm");

    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of email and password
        var email = loginForm.querySelector('input[type="text"]').value;
        var password = loginForm.querySelector('input[type="password"]').value;

        // Perform client-side validation if needed

        // Simulate server-side verification (replace with your server-side logic)
        if (email === "your@email.com" && password === "yourpassword") {
            // Redirect to the dashboard if login is successful
            window.location.href = "/dashboard";
        } else {
            // Display an error message (you can customize this part)
            alert("Login failed. Please check your credentials.");
        }
    });
});
