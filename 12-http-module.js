const http = require('http')

// two arguments (request, response)
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello World xd :)')
    }
    if(req.url === '/about'){
        res.end('About')
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p> Page not found!</p>
    <a href="/"> Home </a>
    `)
})

// port number
server.listen(5000)