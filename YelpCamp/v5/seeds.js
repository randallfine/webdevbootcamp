var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comments")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://hd.unsplash.com/photo-1445308394109-4ec2920981b1",
        description: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man."
        
    },
    {
        name: "Midnight Cove",
        image: "https://hd.unsplash.com/photo-1432817495152-77aa949fb1e2",
        description: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."
        
    },
    {
        name: "Lake LotaHockey",
        image: "https://hd.unsplash.com/photo-1444124818704-4d89a495bbae",
        description: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."
        
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