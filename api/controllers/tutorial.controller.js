'use strict';

const db = require("../models/index");
const Tutorials = db.mongoose.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Tutorials.find({}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  Task.findById(req.params.taskId, function(err, task) {
          if (err)
            res.send(err);
          res.json(task);
        });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  Tutorials.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
          if (err)
            res.send(err);
          res.json(task);
        });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorials.remove({
    _id: req.params.taskIdx
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorials.remove({}, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };