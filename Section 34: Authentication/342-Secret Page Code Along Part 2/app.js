var express = require("express")
app = express();
mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/auth_demo_app");

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

app.listen(3000, () => {
    console.log("Server hosted at http://localhost:3000");
});