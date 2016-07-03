var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
    res.send("Hi There!");
}); 

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!!"); 
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog!!")
    res.send("MEOW!");
});
// req.params
app.get("/r/:subRedditName", function(req, res){
    var subreddit = req.params.subRedditName;
    res.send("Welcome To the "+subreddit.toUppercase()+" SubReddit!");
}); 

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!")
});
//Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server had started");
});
