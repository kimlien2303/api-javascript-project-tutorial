'use strict';
module.exports = function(app) {
  var tutorial = require('../controllers/tutorial.controller');

  // tutorial Routes
  app.route('/tutorials')
    .get(tutorial.findAll)
    .delete(tutorial.deleteAll);


  app.route('/tutorials/:id')
    .get(tutorial.findOne)
    .put(tutorial.update)
    .delete(tutorial.delete);

    var todoList = require('../controllers/todoList.controller');

    // todoList Routes
    app.route('/tasks')
      .get(todoList.list_all_tasks)
      .post(todoList.create_a_task);
  
  
    app.route('/tasks/:taskId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);

};

