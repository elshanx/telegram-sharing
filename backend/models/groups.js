const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
    name: String,
    id: String,
    picturepath: String,
    description: String,
    link: String
});

let groups = mongoose.model('groups', groupsSchema)

module.exports = groups