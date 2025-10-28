const express = require("express");
const app = express();
app.get("/",(req,res)=>{
   return  res.send("Hello From Home Page");
})
app.get("/about",(req,res)=>{
   return  res.send("Hello from about page")
});
app.get("/profile",(req,res)=>{
    return res.send("We created New Page")
});
app.listen(8000,()=>console.log("Serveer Started..."));