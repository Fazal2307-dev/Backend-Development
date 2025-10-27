const http = require("http")
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}:New Requist recieved\n`;
    fs.appendFile("./test.txt",log,(err,data)=>{

    res.end("Heelo form server");
    })

})
myServer.listen(8000,()=> console.log("Server Started!........"));