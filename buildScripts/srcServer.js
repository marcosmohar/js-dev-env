import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

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
