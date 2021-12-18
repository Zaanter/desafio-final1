const { default: axios } = require('axios');
var express = require('express');

var app = express();


app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.post('/submit', function(req,res){
    headers = {
      "Content-Type":"application/json",
      "Accept": "*/*"
    }
    axios.post('http://172.21.188.211:3000/submit', req.body,(headers)).catch((error) => {
          console.log('Error:' , error)
      })
})

app.listen(8080, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 8080!');
});