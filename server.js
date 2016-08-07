var http = require('http');
var requestt = require("request");
var hostname = 'localhost';
var port = 8000;



var person = JSON.stringify({
    name: 'Bob',
    age: 92,
    hair: false
});

http.createServer(function (request, response){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(person);
}).listen(port, hostname, function (){
    console.log('Server running at http://' + hostname + ':' + port + '/');
});