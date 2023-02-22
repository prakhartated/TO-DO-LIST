// require the library
const mongoose = require('mongoose');

// connect to database
// mongoose.connect('mongodb://0.0.0.0:27017/to_do_db');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task_list');
    console.log('connected to mongodb successfully');

}

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});

module.exports = mongoose;