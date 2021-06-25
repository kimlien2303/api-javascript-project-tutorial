'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// var TaskSchema = new Schema({
  
//   title: String,
//   description: String,
//   published: Boolean
// },
// { timestamps: true });

// module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorials", schema);
  
  return Tutorial;
};