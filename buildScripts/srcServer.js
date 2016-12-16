var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

// conseguir el path de index.html
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// escucar por peticiones y servirlas al puerto especificado
app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
