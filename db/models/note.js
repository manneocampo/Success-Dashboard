const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;
autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/dashboarddb");

autoIncrement.initialize(mongoose.connection);

var NoteSchema = new Schema({

  note: {
    type: String,
    trim: true,
    required: "Note is required"
  },

  noteCreated: {
    type: Date,
    default: Date.now
  }
});

// var Note = mongoose.model("Note", NoteSchema);

NoteSchema.plugin(autoIncrement.plugin, 'Note');
var Note = connection.model('Note', NoteSchema);

module.exports = Note;
