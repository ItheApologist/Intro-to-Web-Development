var express = require("express");
    app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"]
    res.render("friends", {friends: friends})
})

app.post("/addfriend", function(req,res) {
    res.send("YOU HAVE REACHED THE ABBAS")
})

app.listen(3000, function() {
    console.log("Server hosted at localhost:3000");
});