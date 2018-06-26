var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var info = require('./formdata');
const app = express();

app.use(express.static('Public'));
app.use(express.static('Script/JS'));

app.get('/', (req, res) =>{                                          
  res.sendFile(path.join(__dirname,'../index.html'));
});

app.get('/about.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../about.html'));
});

app.get('/bks.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../bks.html'));
});

app.get('/contacts.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../contacts.html'));
});

app.get('/ebks.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../ebks.html'));
});

app.get('/gft.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../gft.html'));
});

app.get('/pop.html', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'../pop.html'));
});

app.get('/bk1.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk1.html'))
});

app.get('/bk2.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk2.html'))
});

app.get('/bk3.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk3.html'))
});

app.get('/bk4.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk4.html'))
});

app.get('/bk5.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk5.html'))
});

app.get('/bk6.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk6.html'))
});

app.get('/bk7.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk7.html'))
});

app.get('/bk8.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk8.html'))
});

app.get('/bk9.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk9.html'))
});

app.get('/bk10.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk10.html'))
});

app.get('/bk11.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk11.html'))
});

app.get('/bk12.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk12.html'))
});

app.get('/bk13.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk13.html'))
});

app.get('/bk14.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk14.html'))
});

app.get('/bk15.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk15.html'))
});

app.get('/bk16.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk16.html'))
});

app.get('/bk17.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk17.html'))
});

app.get('/bk18.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk18.html'))
});

app.get('/bk19.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk19.html'))
});

app.get('/bk20.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk20.html'))
});

app.get('/bk21.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/b21.html'))
});

app.get('/bk22.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk22.html'))
});

app.get('/bk23.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk23.html'))
});

app.get('/bk24.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk24.html'))
});

app.get('/bk25.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk25.html'))
});

app.get('/bk26.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk26.html'))
});

app.get('/bk27.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk27.html'))
});

app.get('/bk28.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk28.html'))
});

app.get('/bk29.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk29.html'))
});

app.get('/bk30.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk30.html'))
});

app.get('/bk31.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk31.html'))
});

app.get('/bk32.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk32.html'))
});

app.get('/bk33.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk33.html'))
});

app.get('/bk34.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk34.html'))
});

app.get('/bk35.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk35.html'))
});

app.get('/bk36.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bk36.html'))
});

app.get('/bronze.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/bronze.html'))
});

app.get('/silver.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/silver.html'))
});

app.get('/gold.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/gold.html'))
});

app.get('/platinum.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Public/Links/platinum.html'))
});

nunjucks.configure('templates',{
  autoescape: true,
  express:app
});

app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var info = [];

app.route('/contacts')
  .get((req,res)=>{
    res.render('contacts');
  })
  .post((req,res)=>{
    info.push(new person(req.body.name, req.body.phone, req.body.email, req.body.feedback));
    for (var p in people){
      console.log(info[n].name);
      console.log(info[p].phone);
      console.log(info[e].email);
      console.log(info[f].feedback);
    }
    res.end();
  });

app.listen(9050);                                                     
