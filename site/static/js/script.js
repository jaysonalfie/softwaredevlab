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
        if (email === "jayson@gmail.com" && password === "jayson102") {
            // Redirect to the dashboard if login is successful
            window.location.href = "/dashboard";
        } else {
            // Display an error message (you can customize this part)
            alert("Login failed. Please check your credentials.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Create a JSON object with user data
        var userData = {
            email: email,
            password: password,
        };

        // Send a POST request to the server to save user data
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // User registration successful
                alert("Registration successful. You can now log in.");
            } else {
                // Registration failed, display an error message
                alert("Registration failed. Please try again.");
            }
        });
    });
});

