// Acquiring Express
const express = require('express');
const bodyParser = require('body-parser');

// Using Express
const app = express();

// Assigning Port
const port = 8000;

// Mongoose
const mongoose = require('./config/mongoose');
const Todo = require('./models/Todo');

// Use Express Router
app.use('/' , require('./routes/index'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));

// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Check if Port is running or not
app.listen(port , function (err) {
    if (err) {
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server is running on the port : ${port}`);
});