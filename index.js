const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const mongoose = require('./config/mongoose');
const task = require('./models/task');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Oops! error: ${err}  occured while trying to run the server`);
        return;
    }
    console.log(`The server is succesfully running on port: ${port}`);
    return;
})