const Todo = require('../models/Todo');

module.exports.home = function (req , res) {
    Todo.find({} , function (err , todo) {
        if (err) {
            console.log(err);
            return;
        }

        // return res.render('home' , { title: 'home', task_list: tasks });
        return res.render('home' , { title: 'home', to_do_db: todo });
    })    
}