var app = (require('express'))();
var mongu = require('mongoose');

var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

mongu.connect("mongodb://localhost/authBasics");
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    console.log("Home page");
    res.render("index");
})

app.get("/seCret",(req,res)=>{
    console.log("Secret");
    res.render("seCret");
})

app.listen(port,ip, ()=>{
    console.log("Server started on ip"+ip+" port "+port);
})