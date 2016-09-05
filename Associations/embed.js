var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

//POST-TITLE,CONTENT

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});


var Post = mongoose.model("Post", postSchema);


//USER-EMAIL,NAME
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
});

var User = mongoose.model("User", userSchema);




// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err.message);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err,user){
//     if(err){
//         console.log(err.message);
//     } else {
//         console.log(newPost);
//     }
// });