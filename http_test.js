const http = require('http');
const server = http.createServer((req,res)=>{
if (req.url === '/'){
return res.end('This is the home page 111')
}
if (req.url === '/about'){
 return res.end('This is about us ')
 }
 return res.end(`
<h1>Oops!</h1>
<p>Can't find</p>
<a href="/">Back home</a>
`)
})
server.listen(5000)