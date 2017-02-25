var express = require("express");
var app = express();

app.get("/",function(req,res){
  console.log(req.url);
  res.send("You reached Homepage");
});

app.get("/profile/:id",function(req,res){
  res.send("Current Profile is " + req.params.id);
});

app.listen(3000);



