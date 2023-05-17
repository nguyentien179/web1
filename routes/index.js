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
module.exports = router;
 