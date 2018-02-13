const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

var NoteSchema = new Schema({

  note: {
    type: String,
    trim: true,
    required: "Note is required"
  },

  // `date` must be of type Date. The default value is the current date
  noteCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
