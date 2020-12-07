var express = require('express');
var router = express.Router();
var listData = require('./listData');

/* GET users listing. */
router.get('/get', function (req, res, next) {
  res.send(listData);
});

module.exports = router;