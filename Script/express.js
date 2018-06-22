var express = require('express');
var path = require('path');
const app = express();

app.use(express.static('Images'));
app.use(express.static('Styles'));

app.get('/', (req, res) =>{                                          
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/about', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./about.html'));
});

app.get('/bks', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./bks.html'));
});

app.get('/contacts', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./contacts.html'));
});

app.get('/ebks', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./ebks.html'));
});

app.get('/gft', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./gft.html'));
});

app.get('/pop', (req, res) =>{                                    
  res.sendFile(path.join(__dirname,'./pop.html'));
});

app.get('/bk1', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk1.html'))
});

app.get('/bk2', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk2.html'))
});

app.get('/bk3', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk3.html'))
});

app.get('/bk4', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk4.html'))
});

app.get('/bk5', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk5.html'))
});

app.get('/bk6', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk6.html'))
});

app.get('/bk7', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk7.html'))
});

app.get('/bk8', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk8.html'))
});

app.get('/bk9', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk9.html'))
});

app.get('/bk10', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk10.html'))
});

app.get('/bk11', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk11.html'))
});

app.get('/bk12', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk12.html'))
});

app.get('/bk13', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk13.html'))
});

app.get('/bk14', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk14.html'))
});

app.get('/bk15', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk15.html'))
});

app.get('/bk16', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk16.html'))
});

app.get('/bk17', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk17.html'))
});

app.get('/bk18', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk18.html'))
});

app.get('/bk19', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk19.html'))
});

app.get('/bk20', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk20.html'))
});

app.get('/bk21', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/b21.html'))
});

app.get('/bk22', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk22.html'))
});

app.get('/bk23', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk23.html'))
});

app.get('/bk24', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk24.html'))
});

app.get('/bk25', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk25.html'))
});

app.get('/bk26', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk26.html'))
});

app.get('/bk27', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk27.html'))
});

app.get('/bk28', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk28.html'))
});

app.get('/bk29', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk29.html'))
});

app.get('/bk30', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk30.html'))
});

app.get('/bk31', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk31.html'))
});

app.get('/bk32', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk32.html'))
});

app.get('/bk33', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk33.html'))
});

app.get('/bk34', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk34.html'))
});

app.get('/bk35', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk35.html'))
});

app.get('/bk36', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bk36.html'))
});

app.get('/bronze', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/bronze.html'))
});

app.get('/silver', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/silver.html'))
});

app.get('/gold', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/gold.html'))
});

app.get('/platinum', (req, res)=>{
  res.sendFile(path.join(__dirname, '../Links/platinum.html'))
});

app.listen(9050);                                                     
