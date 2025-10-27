const fs = require("fs");
//sync....
//fs.writeFileSync("./test.txt","You are creating your first file through fs");
//async
//fs.writeFile("./test.txt","async",(err)=>{});
fs.writeFileSync("./contact.txt","fazal:+9199999999");
//sync
// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result);
//async
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err)
    }else{
        console.log(result);
    }
});