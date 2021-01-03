var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var groups=require('../models/groups')

/* GET home page. */
router.get('/', function(req, res, next) {
  //await groups.findByIdAndUpdate()
  var newgroup=new groups({
    name: "Test",
    id: "Test",
    picturepath: "Test",
    description:"Test",
    link: true
  })
  newgroup.save()
  res.send("ok")
});

module.exports = router;
