var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

mongoose.connect("mongodb://localhost:27017/blog_demo_2");

// Post.create({
//     title: "How to cook the best burger Part 3",
//     content: "Seems you mustered up the courage for more!",
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//         if(err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 };
//             });
//         };
//     });
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher",
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    };
});