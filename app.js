var  app            = (require('express'))(),
     mongu          = require('mongoose'),
     passpo         = require("passport"),
     localPass      = require("passport-local"),
     bodyParser     = require("body-parser"),
     passMong       = require("passport-local-mongoose"),
     user           = require("./models/users.js");
var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

app.use(require("express-session")({
    secret  : "some secret little sauce",
    resave  : false,
    saveUninitialized   : false
}));
mongu.connect("mongodb://localhost/authBasics");
app.set('view engine','ejs');
app.use(passpo.initialize());
app.use(passpo.session());

passpo.serializeUser(user.serializeUser());
passpo.deserializeUser(user.deserializeUser());

app.get("/",(req,res)=>{
    console.log("Home page");
    res.render("index");
})

app.get("/seCret",(req,res)=>{
    console.log("Secret");
    res.render("seCret");
})

app.listen(port,ip, ()=>{
    console.log("Server started on ip "+ip+" port "+port);
})