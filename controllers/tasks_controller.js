const Task = require("../models/task")

module.exports.addTask = function (req, res) {
    Task.create(req.body, function (err, newTask) {
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('back');
    })
};

module.exports.deleteTask = function (req, res) {
    const id = req.query.id;
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    return res.redirect('back');
}