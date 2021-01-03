var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var groups=require('../models/groups')

/* GET home page. */
router.post('/', function(req, res, next) {
  //await groups.findByIdAndUpdate()
  var newgroup=new groups({
    name: req.body.name,
    id: req.body.id,
    picturepath: req.body.path,
    description:req.body.description,
    link: req.body.link,
    isfront:req.body.front
    
  })
  newgroup.save()
console.log(req.body);
  res.send("ok")
});

module.exports = router;
