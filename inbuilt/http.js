var http = require('http');

var server = http.createServer(function(req,res){
    res.write("<h1>Hi From Node</h1>");
    res.end();
})

server.listen(8900)