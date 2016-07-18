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
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create(
    {
       name: "Granite Hill", 
       image: "https://farm4.staticflickr.com/3130/2770459706_3aed20703e.jpg",
       description: "This is a huge granite hill, no bathrooms, no water, Beautiful granite!!"
        
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND: ");
            console.log(campground);
        }
    });*/


    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
        res.render("index", {camps: allCampgrounds});
        }
    });
    
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image}
    Campground.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    })
    
});

app.get("/campgrounds/:id", function(req, res) {
    res.render("show");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has stated!!");
});