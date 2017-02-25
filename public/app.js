var express = require("express");

var app = express();

//set up template engine
app.set("view engine","ejs");

//static files
app.use("/assets");

//listen port
app.listen(3000)；
console.log("3000 Listening");

console.l
