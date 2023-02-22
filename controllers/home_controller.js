const Task = require("../models/task");

module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log(err);
            return;
        }

        return res.render('home', { title: 'home', to_do_db: tasks });

    })

}