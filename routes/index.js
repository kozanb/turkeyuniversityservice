var express = require('express');
var router = express.Router();
var listData = require('./listData');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Üniversiteler',
    list: listData
  });
});

module.exports = router;