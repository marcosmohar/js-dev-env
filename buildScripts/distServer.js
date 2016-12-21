import express from 'express';
import path from 'path';
import open from 'open';


const port = 3000;
const app = express();

/* eslint-disable no-console */

app.use(express.static('dist'));

// conseguir el path de index.html
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
  // Agregado por simplicidad. Pretender que es generado por una db
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName":"Tina", "lastName":"Lee", "email":"tina.lee@hotmail.com"}
  ]);
});


// escuchar por peticiones y servirlas al puerto especificado
app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
