// Import required npm packages
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

// Define the default schema for the objects in the restful_blog_app collection.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

// Compile the blog schema into the blog model
var Blog = mongoose.model("Blog", blogSchema)

// Connect to mongoDb restful_blog_app
mongoose.connect("mongodb://localhost:27017/restful_blog_app");

// Set the view engine to ejs so we don't have to specify file extensions for ejs files. 
app.set("view engine", "ejs");

// Make express use the public directory
app.use(express.static("public"));

// Make express use the body parser
app.use(bodyParser.urlencoded({extended: true}));

/////////////////////////////////////
// RESTFUL ROUTES
////////////////////////////////////

app.get("/", (req,res) => {
    res.redirect("/blogs")
})

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        };
    });
});

// Serve our app locally on port 3000
app.listen(3000, () => {
    console.log("Blog app is listening on http://localhost:3000");
});