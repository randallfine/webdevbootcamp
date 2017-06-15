"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// const george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save((err, cat) =>{ 
//  if(err){
//      console.log("Stuff went south!");
//  } else {
//      console.log(cat);
//  }
// });

let cb = (err, cats) => {
    if(err){
        console.log("Error!", err);
    } else {
        console.log(cats);
    }
};

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
},cb );

Cat.find({}, cb);

