const fs = require("fs");
fs.writeFileSync("./contact.txt","fazal:+91454789");

// console.log("1");
// //Non Blocking
// // fs.readFile("./contact.txt","utf-8",(err,result)=>{
// //     console.log(result);
// // })
// //Block operations
// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);
// console.log("2");
// console.log("3")

const os = require("os");
console.log(os.cpus().length);