const Todo = require("../models/Todo")

module.exports.addTask = function (req, res) {
    Todo.create(req.body, function (err, newTask) {
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('back');
    })
};

module.exports.deleteTask = function (req, res) {
    const id = req.query.id;
    Todo.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    return res.redirect('back');
}