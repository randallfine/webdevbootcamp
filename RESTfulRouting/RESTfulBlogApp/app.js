var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

/*Blog.create({
    title: "Test Blog",
    image: "https://images.unsplash.com/photo-1467348733814-f93fc480bec6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=2635f17894dffc22d8073624dad76875",
    body: "HELLO! THIS IS A BLOG POST!"
})*/

//RESTful ROUTES

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    //create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            //redirect to index
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    res.send("SHOW PAGE");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!");
});
