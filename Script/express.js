var express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res) =>{                                           //server handler for index page
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/contact', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./contacts.html'));
});

app.listen(9050);                                                     //server listener
