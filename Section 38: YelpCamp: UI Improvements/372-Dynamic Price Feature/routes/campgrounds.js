var express     = require("express");
    router      = express.Router();
    Campground  = require("../models/campground");
    middleware  = require("../middleware");

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

// Create route
router.post("/", middleware.isLoggedIn, (req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    const author = {
        id: req.user._id,
        username: req.user.username,
    };
    const newCampground = {
        name: name, 
        image: image,
        price: price,
        description: description, 
        author:author,
    };
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
            console.log(newlyCreated);
        };
    });
});

router.get("/new", middleware.isLoggedIn, (req,res) => {
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

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect(`/campgrounds/${req.params.id}`);
        };
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, (req,res) => {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        };
    });
});
module.exports = router;