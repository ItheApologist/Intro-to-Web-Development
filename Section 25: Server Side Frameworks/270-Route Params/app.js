var express = require("express");
    app = express();

app.get("/", function(req, res) {
    res.send("Hi There!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye");
});

app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    res.send("WELCOME TO A SUBREDDIT")
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send(`Welcome to ${req.params.subredditName}`);
});

app.get("/r/:subredditName/:testing", function(req, res) {
    res.send("Welcome to a testing page!")
})

app.get("*", function(req, res) {
    res.send("You are a star");
});

app.listen(3000, function() {
    console.log("Server started and hosted on port 3000");
});