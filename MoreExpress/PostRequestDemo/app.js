"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const friends = ["Kimi", "Nick", "Brandon", "Jeff", "Doc"];

app.get("/", (req, res) => res.render("home"));

app.post("/addfriend", (req, res) => {
    const newFriend = req.body.newfriend;
    friends.push(newFriend);
   res.redirect("/friends")
});

app.get("/friends", (req, res) => {
    res.render("friends", {friends});
    
});

app.listen(process.env.PORT, process.env.ID, () => console.log("Server GO!"));