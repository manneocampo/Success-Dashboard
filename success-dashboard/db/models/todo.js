const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
mongoose.promise = Promise;

var ToDoSchema = new Schema({

  todo: {
    type: String,
    trim: true,
    required: "To-do item is Required"
  },

  description: {
    type: String,
    trim: true,
    required: "Description is Required"
  },

  // `date` must be of type Date. The default value is the current date
  todoCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var ToDo = mongoose.model("ToDo", ToDoSchema);

// Export the User model
module.exports = ToDo;
