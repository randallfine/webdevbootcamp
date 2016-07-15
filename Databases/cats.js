var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//add a new cat to the DB

/*var george = new Cat({
   name: "Mrs. Flufflesworth",
   age: 7,
   temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!!");
    } else {
        console.log("Save Successfull!!");
        console.log(cat);
    }
});*/

Cat.create({
    name: "Snowball",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
        console.log("YOU BROKE IT!!");
    } else {
        console.log(cat);
    }
});

//retrieve all cats from DB and console.log(each)


Cat.find({}, function(err, cats){
    if(err){
        console.log("ERRR....OORRR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS....")
        console.log(cats);
    }
});