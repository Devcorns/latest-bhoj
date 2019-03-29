var path = require('path');
var express = require('express');

var router = express.Router();




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/login', function(req, res, next) {
  res.send('Inside Login');
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.resolve('views/auth/register.html'));
});



module.exports = router;
