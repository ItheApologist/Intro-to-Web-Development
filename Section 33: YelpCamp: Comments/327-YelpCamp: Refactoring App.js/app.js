const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground")

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("landing");
});

app.get("/campgrounds", (req,res) =>{
    Campground.find({}, (err, allCampgrounds) => {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds})
        }
    })
    // res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", (req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        };
    });
});

app.get("/campgrounds/new", (req,res) => {
    res.render("new.ejs");
});

// id signifies anything like /test or /help. Because /new is defined above, /new will always route before the code below.

app.get("/campgrounds/:id", (req,res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground})
        }
    })
})

app.listen(3000, () => {
    console.log("YelpCamp app is being served at http://localhost:3000");
});