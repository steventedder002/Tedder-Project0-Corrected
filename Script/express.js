var express = require('express');
var path = require('path');
const app = express();

app.use('/Images', express.static(path.join (__dirname, '.../Images')));

app.get('/', (req, res) =>{                                          
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'about.html'));
});

app.get('/bks', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'bks.html'));
});

app.get('/contacts', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'contacts.html'));
});

app.get('/ebks', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'ebks.html'));
});

app.get('/gft', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'gft.html'));
});

app.get('/pop', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'pop.html'));
});

app.listen(9050);                                                     
