const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
        {res.end('Welcome to homepage')}
    if(req.url === '/about')
      {  res.end(`<p>This is your fucking <h1>about page</h1></p>`)}
    
    res.end(`
        <h1>Ooops!</h1>
        <p>No page found</p></br>
        <p><a href="/">back home</a></p>
    `)
})
server.listen(3050)