const { default: axios } = require('axios');
var express = require('express');

var app = express();


app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.post('/submit', function(req,res){
    data = req.body
    headers = {
      "Content-Type":"application/json",
      "Accept": "*/*"
    }
    response = axios.post('http://172.21.188.211:3000/submit',{
      "email": "agustrocheok@email.com",
      "assistantId": "9069f9e4-1a59-409b-9134-fb559f1750e8",
      "url": "https://api.us-south.assistant.watson.cloud.ibm.com/instances/c97fe366-1519-4451-8f16-91b7cf71c2cc",
      "skillId": "d16e8fed-8588-49c7-8cae-e99d07a50137",
      "apiKey": "ZTN3628mIE3nXW30aFR0fhtvGwZKSzFLBEr_5sZi_2NW",
      "submitConfirmation": false
    }).catch((error) => {
          console.log('Error:' , error)
      })
    res.json(response)
})

app.listen(8080, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 8080!');
});