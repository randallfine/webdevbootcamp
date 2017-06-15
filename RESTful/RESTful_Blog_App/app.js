"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://localhost/restful_blog_app");

app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body : String,
    created : {type: Date, default : Date.now}
});

const Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "test blog",
//     image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
//     body: "I am a test blog, foo!"
// });

app.get("/", (req, res) => res.redirect("/blogs"));

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(err);
        } else {
             res.render("index", {blogs});
        }
    });
   
    
});



app.listen(process.env.PORT, process.env.ID, () => console.log("take a REST"));