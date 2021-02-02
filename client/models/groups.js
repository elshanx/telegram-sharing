const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
  name: String,
  id: String,
  picturepath: String,
  description: String,
  link: String,
  isfront: Boolean,
});

module.exports =
  mongoose.model.Groups || mongoose.model('Groups', groupsSchema);
