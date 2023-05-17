var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'abc' });
});
// music page
router.get('/youtube', (req, res) =>{
  res.render('youtube');
});
router.get('/login', (req, res) =>{
  res.render('login');
});
//lay data tu form input
router.post('/check', (req,res) =>{
  var account = req.body;
  var username = req.body.username
  var password = req.body.password
  if(username =='admin' && password =='admin')
  {
    res.send('login success');
  }
  else
  {
    res.send('false');
  }
});
module.exports = router;
 