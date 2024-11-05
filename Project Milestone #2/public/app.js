// app.js
// Regular expression for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Setting the EventListener function to respond to the submit event occurrence 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Taking the input values made by the user 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Checking for any missing fields to alert the user of a missing value
    if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission
    } else if (!emailPattern.test(email)) { // Validating the email section
        alert("Please enter a valid email address!");
        event.preventDefault(); // Prevent form submission
    }
});
