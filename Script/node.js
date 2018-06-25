var http = require('http');
var fs = require('fs');


var httpHandler = (request, response) => {                    
  var fileSync = fs.readFileSync('./index.html');     
  response.end(fileSync);

  if (request.url === '/'){
    switch(request.method){
      case 'GET':
      fs.readFile('./index.html', (error, data) =>{       
        if (error){
          console.log(error);
          response.end('something broke');
        }
        response.end(data);
      });
      break;
      case 'POST':
      if (request.url === './about'){
        fs.readFile('./about.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
        case 'POST':
      if (request.url === './bks'){
        fs.readFile('./bks.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
        case 'POST':
      if (request.url === './contacts'){
        fs.readFile('./contacts.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
        case 'POST':
      if (request.url === './ebks'){
        fs.readFile('./ebks.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
        case 'POST':
      if (request.url === './gft'){
        fs.readFile('./gft.html', (error, data) =>{       
          if (error){
            console.log(error);
            response.end('something broke');
          }
          response.end(data);
        });
      }
        break;
        case 'POST':
      if (request.url === './pop'){
        fs.readFile('./pop.html', (error, data) =>{       
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
  
var server = http.createServer(httpHandler);                  
var port = 9060;                                              

server.listen(port);                                          
