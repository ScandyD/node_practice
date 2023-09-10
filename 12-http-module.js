const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('Welcome to our homepage');
    }
    if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('Here is our about page');
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Click here!</a>
    `)
})

server.listen(5000);