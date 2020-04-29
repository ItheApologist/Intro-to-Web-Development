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

app.get("*", function(req, res) {
    res.send("You are a star");
});

app.listen(3000, function() {
    console.log("Server started and hosted on port 3000");
});