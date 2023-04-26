let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    
    let filename = "./";
    
    switch(req.url) {
        case '/':
            filename += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            filename += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            filename += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            filename += '404.html'
            res.statusCode = 404;
    }


    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);