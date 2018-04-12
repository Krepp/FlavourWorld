
const express = require('express');
// const bodyParser = require('body-parser')
const app = express();


// app.use(bodyParser.urlencoded({extended: true}))
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('pages/home')
});
