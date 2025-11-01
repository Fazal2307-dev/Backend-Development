const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8000;

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=>console.log("Mongoodb Connnected"))
.catch((err)=>console.log("Mongo error",err));


//Schema
const userSchema = new  mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    emai:{
        type:String,
        required:true,
        unique:true,
    },
    Jobtitle:{
        type:String
    },
    gender:{
        type:String
    }
});

const User = mongoose.model('user',userSchema);








//MiddleWare-plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\n${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
 next();
    })
   
})


// app.get("/users",(req,res)=>{
//     const html = `
//     <ul>
//     ${users.map((users)=> `<li>${users.first_name}, <li>${users.email} </li>,`)}
//     </ul>
//     `;
//     res.send(html);
// })

//Routes
// app.get("/",(req,res) =>{
//     res.setHeader("myname","Fazal")
// return res.send("Welcome To HomePage")
// })
// app.get("/api/users",(req,res)=>{
//     res.setHeader("x-myName","Fazal");//custom header
//   //always add  x to custom
//     return res.json(users)
// })
// //Dynamic Routing
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//    return  res.json(user);
// })

app.post("/api/users",(req,res)=>{
//creating new users
    const body = req.body;
    users.push({...body, id : users.length + 1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
     return  res.status(201).json({status:'success',id:users.length })
    });
    
})
// app.route("/api/users/:id")
// .get((req,res) => {
//     //ToDo :create new user
//     return res.json({status:"pending"});
// });

// app.patch((req,res)=>{
//       //ToDo :Editing  user with id
//     return res.json({status:"pending"});
// });

// app.delete((req,res)=>{
//       //ToDo :delete user with id
//     return res.json({status:"pending"});
// });


app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT} `));