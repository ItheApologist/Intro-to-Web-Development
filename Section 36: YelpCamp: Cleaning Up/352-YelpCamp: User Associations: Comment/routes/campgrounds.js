var express     = require("express");
    router      = express.Router();
    Campground  = require("../models/campground");

// CAMPGROUND ROUTES

router.get("/", (req,res) =>{
    Campground.find({}, (err, allCampgrounds) => {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        };
    });
    // res.render("campgrounds", {campgrounds: campgrounds})
});

router.post("/", (req,res) => {
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

router.get("/new", (req,res) => {
    res.render("campgrounds/new");
});

router.get("/:id", (req,res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground})
        };
    });
});

module.exports = router;