var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Kimberly", "Tigre", "Tony", "Lars", "Pierre"];

app.get("/", function(req,res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
   var newFriend = req.body.newFriend;
   friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends",function(req, res){
   
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!");
});