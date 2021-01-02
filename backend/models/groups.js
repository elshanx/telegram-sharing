const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    name: String,
    id: String,
    picturepath: String,
    description: String,
    link: Boolean
});

let Data = mongoose.model('Data', dataSchema)

module.exports = Data