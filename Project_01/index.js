const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 8000;

app.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${users.map((users)=> `<li>${users.first_name}, <li>${users.email} </li>,`)}
    </ul>
    `;
    res.send(html);
})

//Routes
app.get("/",(req,res) =>{
return res.send("Welcome To HomePage")
})
app.get("/api/users",(req,res)=>{
    // console.log(users)
    return res.json(users)
})
//Dynamic Routing
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
   return  res.json(user);
})

app.routes("/api/users/:id")
.post("/api/users",(req,res) => {
    //ToDo :create new user
    return res.json({status:"pending"});
});

app.patch((req,res)=>{
      //ToDo :Editing  user with id
    return res.json({status:"pending"});
});

app.delete((req,res)=>{
      //ToDo :delete user with id
    return res.json({status:"pending"});
});


app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT} `));