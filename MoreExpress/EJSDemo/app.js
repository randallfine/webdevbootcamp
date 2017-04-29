"use strict";
const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/", (req, res) => res.render("home"));

app.get("/fallinlovewith/:thing", (req,res)=>{
    let thing = req.params.thing;
    
    res.render("love", {thing});
});

app.get("/posts", (req, res) => {
   const posts = [
       {title: "Post1", author: "Susy"},
       {title: "Who stole my mustache wax", author: "Bill"},
       {title: "Wasn't me, ask Susy", author: "Ted"}
    ];
    
    res.render("posts", {posts});
});

app.listen(process.env.PORT, process.env.IP, ()=>console.log("Server's UP"));