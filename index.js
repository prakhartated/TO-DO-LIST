// Acquiring Express
const express = require('express');

// Using Express
const app = express();

// Assigning Port
const port = 8000;

// Use Express Router

// Check if Port is running or not
app.listen(port , function (err) {
    if (err) {
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server is running on the port : ${port}`);
});