const http  = require('http')
const port = 3000
const path  = require('path')
const fs  = require('fs')



http.createServer((req,res)=>{
      

       let filePath = '';

       if (req.url === '/') {
           filePath = path.join(__dirname, './home.html');
       } else {
           filePath = path.join(__dirname, req.url);
       }

       const extname = path.extname(filePath);
       let contentType = 'text/html';

       if(extname == '.css'){
              contentType = 'text/css'
       }
       else if(extname == '.js'){
              contentType = 'text/javascript'
       }

       fs.readFile(filePath,'utf-8',(err,data)=>{
              if(err){
                     console.log("problem occurced in loading");
              }
              res.writeHead(200,{'Content-Type':contentType})
              res.write(data)
              res.end()

       })


}).listen(port)

