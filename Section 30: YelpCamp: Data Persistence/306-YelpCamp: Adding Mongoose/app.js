const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
});

const Campground = mongoose.model("Campground", campgroundSchema);

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
            res.render("campgrounds", {campgrounds: allCampgrounds})
        }
    })
    // res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", (req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name: name, image: image};
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

app.listen(3000, () => {
    console.log("YelpCamp app is being served at http://localhost:3000");
});