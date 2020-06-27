var express = require('express');
var router = express.Router();

//Setting up Pug
//router.set('view engine', 'pug');

router.get('/', function(req, res){

  number = req.body;
  console.log(number);

  res.render('submit', req.body);
})

router.post('/', function(req, res){
  postInfo = req.body;

  console.log(postInfo.link);

  console.log(postInfo.event1.organisation)

  res.render('app', {
    postInfo: postInfo
  })
})

module.exports = router;