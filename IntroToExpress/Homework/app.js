"use strict";
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hi there! Welcome to my assignment!"));

app.get("/speak/:animal", (req, res) => {
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
    };
    
    let animal = req.params.animal.toLowerCase(); 
    let sound = sounds[animal];
    
    res.send(`The ${animal} says '${sound}'`);
    
});

app.get("/repeat/:repeater/:number", (req, res)=>{
    let str = req.params.repeater;
    let num = Number(req.params.number);
    let viewStr = "";
    for(var i = 0; i < num; i++){
       viewStr+=str+" ";
    }
    res.send(viewStr);
});


app.get("*", (req, res) => {
    res.send("Sorry, page not found..What are you doing with your life?!?")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});