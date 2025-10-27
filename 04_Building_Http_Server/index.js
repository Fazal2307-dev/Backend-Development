const http = require("http")
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} ${req.url}:New Requist recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("./test.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case"/":
        res.end("Home page");
        break;
        case"/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
        case "/search":
        const search = myUrl.query.search_query;
        res.end("there is your result for" + search);
        default:
        res.end("404 Not Found");
    }
    })

})
myServer.listen(8000,()=> console.log("Server Started!........"));