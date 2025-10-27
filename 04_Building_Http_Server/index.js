const http = require("http")
const myServer = http.createServer((req,res)=>{
    console.log("We get you reuest");
    res.end("Heelo form server");
})
myServer.listen(8000,()=> console.log("Server Started!........"));