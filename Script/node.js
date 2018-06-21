//basic steps to create the server
var http = require('http');
var fs = require('fs');

var httpHandler = (request, response) => {                    //create the handler
  var fileSync = fs.readFileSync('index.html');     //loads all information on an html page
  response.end(fileSync);

  if (request.url === '/'){
    switch(request.method){
      case 'GET':
      fs.readFile('index.html', (error, data) =>{       //example of a call back function
        if (error){
          console.log(error);
          response.end('something broke');
        }
        response.end(data);
      });
      break;
      case 'POST':
      if (request.url === '/contact'){
        fs.readFile('contact.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
      default:
        break;
    }    
  }  
}
  
var server = http.createServer(httpHandler);                  //create the server. the (handler) actually calls the server
var port = 5005;                                              //create the port number

server.listen(port);                                          //create the listener
