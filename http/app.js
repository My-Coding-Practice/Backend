const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello world')
    }
    else if (req.url === '/about') {
        res.end('Here is info about the site')
    } else {
        res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are lookign for</p>
    <a href='/'>Back to home</a>
    `)
    }
    // res.write('Hello world');
    // res.end();
})

server.listen(5000);