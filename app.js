var express = require('express');
var app = express();

//Declaring body-parser
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//Declaring routers
var submit = require('./submit.js');

app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('main', {title: 'Hey', message: 'Hello there!'});
});

app.post('/', function(req, res){

    number = req.query;
    console.log(number);
  
    res.render('submit', req.body);
  })

app.use('/submit', submit);

app.listen(8080);