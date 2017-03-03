var express = require("express");
var app = express();
var fs = require("fs");



app.get("/",function(req,res){
  console.log(req.url);
  res.send("You reached Homepage");

});

app.get("/profile/:id",function(req,res){
    res.send(req.url + " Current profile is " + req.params.id);
});

app.listen(3000);



