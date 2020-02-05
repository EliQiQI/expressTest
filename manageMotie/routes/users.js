var express = require('express');
var router = express.Router();
var usersController=require('../controller/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',usersController.login);
router.post('/register',usersController.register);
module.exports = router;
