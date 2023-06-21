const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.end("welcome to our home page")
    }
    if (req.url == "/about"){
        res.end("Here is our short history")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
})
server.listen(5000);

const http = require('http')

const server1 = http.createServer((req, res) => {
 if (req.url === '/'){
    res.end('Home page')
 }
 if (req.url === '/about'){
    res.end('About page')
 } else {
    res.end('Error page')
 }
})

server1.listen(5000, () => {
    console.log('Server listening on port 5000')
})