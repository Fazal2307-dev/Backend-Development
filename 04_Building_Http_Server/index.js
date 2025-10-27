const http = require("http")
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} ${req.url}:New Requist recieved\n`;
    const myUrl = 
    fs.appendFile("./test.txt",log,(err,data)=>{
    switch(req.url){
        case'/':res.end("Home page");
        break;
        case'/about':res.end("We are on about page");
        break;
        default:
            res.end("404 Not Found");
    }
    })

})
myServer.listen(8000,()=> console.log("Server Started!........"));