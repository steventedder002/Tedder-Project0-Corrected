var express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res) =>{                                           //server handler for index page
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/about', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./about.html'));
});

app.get('/bks', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./bks.html'));
});

app.get('/contacts', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./contacts.html'));
});

app.get('/ebks', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./ebks.html'));
});

app.get('/gft', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./gft.html'));
});

app.get('/pop', (req, res) =>{                                    //server handler for contact page
  res.sendFile(path.join(__dirname,'./pop.html'));
});

app.listen(9050);                                                     //server listener
