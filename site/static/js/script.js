// script.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the login form
    var loginForm = document.getElementById("loginForm");

    // Add a submit event listener to the form
    // loginForm.addEventListener("submit", function (event) {
    //     event.preventDefault(); // Prevent the default form submission

    //     // Get the values of email and password
    //     var email = loginForm.querySelector('input[type="text"]').value;
    //     var password = loginForm.querySelector('input[type="password"]').value;

    //     // Perform client-side validation if needed

    //     // Simulate server-side verification (replace with your server-side logic)
    //     if (email === "jayson@gmail.com" && password === "jayson102") {
    //         // Redirect to the dashboard if login is successful
    //         window.location.href = "/dashboard";
    //     } else {
    //         // Display an error message (you can customize this part)
    //         alert("Login failed. Please check your credentials.");
    //     }
    // });
});
document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.getElementById("signupForm");
    var email = document.getElementById("email");
    var nameg = document.getElementById("namede");
    var password = document.getElementById("password");
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

      let emailVal = email.value
      let passVal = password.value
      let nameVal = nameg.value
        // Create a JSON object with user data
        var userData = {
            Email:emailVal ,
            Password:passVal ,
            Name:nameVal
        };
// Define the URL where you want to send the POST request
const url = "http://127.0.0.1:5000/signup"; // Make sure this URL matches your Flask route

// Set up the request headers, including 'Content-Type'
const headers = new Headers();
headers.append("Content-Type", "application/json"); // Set the content type to JSON

// Create the request options
const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userData) // Convert the data to JSON
};
// Make the POST request using the Fetch API
fetch(url, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        // Handle the response data here
        alert(data.message)
        console.log("Response data:", data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
    });

    });
});

