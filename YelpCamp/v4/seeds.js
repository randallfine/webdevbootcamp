var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comments")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://hd.unsplash.com/photo-1445308394109-4ec2920981b1",
        description: "Things and Stuff"
        
    },
    {
        name: "Midnight Cove",
        image: "https://hd.unsplash.com/photo-1432817495152-77aa949fb1e2",
        description: "We Run The Night"
        
    },
    {
        name: "Lake LotaHockey",
        image: "https://hd.unsplash.com/photo-1444124818704-4d89a495bbae",
        description: "What Is That Smell??"
        
    }
];
    

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comments){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comments);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}



//ADD COMMENTS

// product.remove(function (err, product) {
//   if (err) return handleError(err);
//   Product.findById(product._id, function (err, product) {
//     console.log(product) // null
//   })
// })

module.exports = seedDB;