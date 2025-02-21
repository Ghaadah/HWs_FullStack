const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 25 },
});

GenreSchema.virtual('url').get(function () {
  return `/catalogy/Genre/${this_id}`;
});

module.exports = mongoose.model('Genra', GenreSchema);
