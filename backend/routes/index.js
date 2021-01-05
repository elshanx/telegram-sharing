const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const groups = require('../models/groups');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const results = await groups.find({ isfront: true });
  console.log(results);
  res.json(results);
});

module.exports = router;
