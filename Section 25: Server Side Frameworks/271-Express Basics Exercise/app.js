var express = require("express");
    app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    if (animal === "pig") {
        res.send("The pig says \"Oink\"")
    } else if (animal === "cow") {
        res.send(`The cow says "Moo"`)
    } else if (animal === "dog") {
        res.send(`The dog says "Wolf Wolf!`)
    } else {
        res.send("Sorry, page not found...What are you doing with your life?")
    }
});

app.get("/repeat/:string/:number", function(req, res) {
    var number = Number(req.params.number);
    var string = req.params.string
    for (var i = 1; i < number; i++) {
        var string = `${string} ${req.params.string}`;
    }
    res.send(string)
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(3000, function() {
    console.log("Server started and hosted on port 3000");
});