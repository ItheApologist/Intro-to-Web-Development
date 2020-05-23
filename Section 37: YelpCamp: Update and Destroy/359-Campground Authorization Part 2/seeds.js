var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sequi magnam eaque nisi suscipit fuga modi fugiat, reprehenderit nihil deserunt praesentium ut aperiam officia odit recusandae odio velit aut facere ipsam explicabo harum! Vero, ea perferendis obcaecati quo sed at alias voluptatem maxime voluptatum quod. Sunt distinctio debitis minima reiciendis veritatis? Neque nisi tempora consectetur ad eum qui nemo, porro saepe fugiat. Sed, harum numquam sint inventore sequi, dolorem eveniet et libero, vitae error porro? Incidunt, aliquam accusantium. Quos, quidem.",
        author: {
            id: "5ec58e33eaf89d2f6979f7a1",
            username: "Thomas"
        }
    },   
    {
        name: "Hamilton's Peak",
        image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sequi magnam eaque nisi suscipit fuga modi fugiat, reprehenderit nihil deserunt praesentium ut aperiam officia odit recusandae odio velit aut facere ipsam explicabo harum! Vero, ea perferendis obcaecati quo sed at alias voluptatem maxime voluptatum quod. Sunt distinctio debitis minima reiciendis veritatis? Neque nisi tempora consectetur ad eum qui nemo, porro saepe fugiat. Sed, harum numquam sint inventore sequi, dolorem eveniet et libero, vitae error porro? Incidunt, aliquam accusantium. Quos, quidem.",
        author: {
            id: "5ec58e33eaf89d2f6979f7a1",
            username: "Thomas"
        }
    },   
    {
        name: "Bear Lake",
        image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sequi magnam eaque nisi suscipit fuga modi fugiat, reprehenderit nihil deserunt praesentium ut aperiam officia odit recusandae odio velit aut facere ipsam explicabo harum! Vero, ea perferendis obcaecati quo sed at alias voluptatem maxime voluptatum quod. Sunt distinctio debitis minima reiciendis veritatis? Neque nisi tempora consectetur ad eum qui nemo, porro saepe fugiat. Sed, harum numquam sint inventore sequi, dolorem eveniet et libero, vitae error porro? Incidunt, aliquam accusantium. Quos, quidem.",
        author: {
            id: "5ec58e33eaf89d2f6979f7a1",
            username: "Thomas"
        }
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
                        author: {
                            author: {
                                id: "5ec58e33eaf89d2f6979f7a1",
                                username: "Thomas"
                            },
                        },
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