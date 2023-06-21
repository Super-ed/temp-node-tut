const http = require('http');
const { readFileSync } = require('fs')

//get all files 
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeimage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    const url = req.url
    console.log(url)
    if(url === "/"){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    } else if (url === '/about'){
        //about page
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
     //style
    }  else if (url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    // image/log
    } else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeimage)
        res.end()
     //logic
    } else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end() 
    } else {
        //not found
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)
// there are some ports that are used for specific tasks