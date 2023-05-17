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
router.get('/input', (req, res) =>{
  res.render('input');
});
//lay data tu form input
router.post('/output', (req,res) =>{
  var student = req.body;
  var age = req.body.tuoi;
  var name = req.body.ten;
  var email = req.body.email;
  var dob = req.body.dob;

  // res.render('output',{sinhvien : student});
  res.render('output',{age : age,name : name,email : email,dob : dob});

});
module.exports = router;
 