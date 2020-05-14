var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user")

mongoose.connect("mongodb://localhost:27017/blog_demo_2");

Post.create({
    title: "How to cook the best burger Part 4",
    content: "Seems you mustered up the courage for more!",
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                };
            });
        };
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher",
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     };
// });