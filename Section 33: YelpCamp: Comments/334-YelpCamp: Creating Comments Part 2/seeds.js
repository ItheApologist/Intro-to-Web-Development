var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "This campground will have you resting forever.",
    },   
    {
        name: "Hamilton's Peak",
        image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "This campground will have you resting forever.",
    },   
    {
        name: "Bear Lake",
        image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "This campground will have you resting forever.",
    },   
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        data.forEach((seed) => {
            Campground.create(seed, (err, campground) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added Campground")
                    Comment.create({
                        text: "This place is amazing but I hate no Wi-Fi",
                        author: "Homer",
                    }, (err, comment) => {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created a comment")
                        };
                    });
                };
            });
        });
   });
};

module.exports = seedDB;