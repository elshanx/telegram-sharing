const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
  name: String,
  id: String,
  picturepath: String,
  description: String,
  link: String,
  isfront: Boolean,
});

let groups = mongoose.model('groups', groupsSchema);

module.exports = groups;
