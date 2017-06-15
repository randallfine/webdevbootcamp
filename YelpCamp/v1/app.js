"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const campgrounds = [
    {name: "Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "The Drunken Hill", image:"https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goats Rest", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
     {name: "Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "The Drunken Hill", image:"https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goats Rest", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
     {name: "Salmon Creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "The Drunken Hill", image:"https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goats Rest", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"}
];

app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => res.render("campgrounds", {campgrounds}));

app.get("/campgrounds/new", (req, res) => res.render("new"));

app.post("/campgrounds", (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name, image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.ID, () => console.log("Yelpv1"))