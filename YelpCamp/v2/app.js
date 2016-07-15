var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Salmon Creek", 
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
        
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND: ");
            console.log(campground);
        }
    })

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