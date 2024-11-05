// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sending the homepage at request of server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sending the about page at request of server
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Sending the contact page at request of server
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

//  Form submissions from the contact page are logged
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Responding with a success message
    res.send('Thank you for contacting us! We will get back to you soon.');
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
