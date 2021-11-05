var http = require('http'); 

var server = http.createServer(function (req, res) {   
    res.end("hello jaishree")

});

server.listen(6050);

console.log('Node.js web server at port 6050 is running..')
