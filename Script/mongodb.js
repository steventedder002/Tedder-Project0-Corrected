const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;

dbClient.connect('mongodb://localhost:27017', (error, client)=>{
  if (error){
    console.log(error);
    client.close();
  }

  var info = db.collection('info');
  
  info.insertOne({
    "name": " ",
    "Phone": " ",
    "Email": " ",
    "Feedback": " "
  }).then(() =>{
    info.findOne({"name": " "}).then((info)=>{
      console.log(info)
    });
  });
});