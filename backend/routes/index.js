var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var groups=require('../models/groups')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var results =await groups.find({isfront:true})
  console.log(results);
  res.send("ok")
});

module.exports = router;
