"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "The Drunken Hill", 
//         image:"https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg",
//         description: "People drink a lot on this hill!"
//     },(err, campground) => err ? console.log(err) : console.log(campground));
    
app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => {
    Campground.find({},(err, allCampgrounds) => err ? console.log(err) : res.render("index", {campgrounds: allCampgrounds}));
});

app.get("/campgrounds/new", (req, res) => res.render("new"));

app.post("/campgrounds", (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = {name, image, description};
   Campground.create(newCampground, (err, newlyCreated) => {
       err ? console.log(err) :  res.redirect("/campgrounds");
   });
});

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
       err ? console.log(err) : res.render("show", {campground : foundCampground});
    });
});

app.listen(process.env.PORT, process.env.ID, () => console.log("Yelp v2"));