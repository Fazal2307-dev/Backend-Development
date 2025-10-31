const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello from HomePage");
})

app.get("/support",(req,res)=>{
    res.send("IF YOU NEED ANY HELP CONTACT ME")
})
app.get("/Internship",(req,res)=>{
    res.send("you are in internship page");
})
app.get("/Jobs",(req,res)=>{
    res.send("You are in jobs page")
})

app.get("/Competitions",(req,res)=>{
    res.send(" you are in Competitions pages")
})
app.get("/Mentorships",(req,res)=>{
    res.send("you are in mentorship pages")
})
app.get("/Practices",(req,res)=>{
    res.send("you are in Practices pages");
})


app.listen(8000,()=>console.log("Server started..."))