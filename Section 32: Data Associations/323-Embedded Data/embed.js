var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema],
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

mongoose.connect("mongodb://localhost:27017/blog_demo");

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to bre polyjuice potion",
//     content: "Just kidding. go to potions class to learn it!",
// });

// newUser.save((err, user) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(user);
//     };
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious",
// });

// newPost.save((err, post) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     };
// });

User.findOne({name: "Hermione Granger"}, (err, user) => {
    if (err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 things I really hate",
            content: "Voldemort. Voldemort. Voldemort",
        });
        user.save((err, user) => {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            };
        });
    };
});
