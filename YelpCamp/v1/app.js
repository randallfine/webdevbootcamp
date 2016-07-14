var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var camps = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3130/2770459706_3aed20703e.jpg"},
        {name: "South Fork", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    
    res.render("campgrounds", {camps: camps});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image}
    camps.push(newCamp);
    res.redirect("/campgrounds");;
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has stated!!");
});