const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d277dd69e4bc6_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417d277dd69e4bc6_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417d277dd69e4bc6_340.jpg"},
];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("landing");
});

app.get("/campgrounds", (req,res) =>{
    res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", (req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req,res) => {
    res.render("new.ejs");
});

app.listen(3000, () => {
    console.log("YelpCamp app is being served at http://localhost:3000");
});