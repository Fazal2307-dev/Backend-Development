const http = require("http")
const fs = require("fs");
fs.writeFileSync("./notex.txt","Learning about http server");
const myServer = http.createServer((req,res)=>{
  console.log(req);
    res.end("Heelo form server");
})
myServer.listen(8000,()=> console.log("Server Started!........"));