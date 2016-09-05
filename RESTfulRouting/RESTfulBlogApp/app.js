var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

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
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            //then, redirect to the index
            res.redirect("/blogs");
            
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
          res.redirect("/blogs");
          console.log(err);
       } else {
           res.render("show", {blog: foundBlog});
       }
   });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
       if(err){
           console.log(err);
           res.redirect("/blogs");
       }else{
           res.redirect("/blogs/" +req.params.id);
       }
   });
});


//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    //distroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/blogs");
            console.log(err);
        }else {
            res.redirect("/blogs");
        }
    });
    
    //redirect
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!");
});
