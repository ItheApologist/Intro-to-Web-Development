var express     = require("express");
    router      = express.Router();
    Campground  = require("../models/campground");

// CAMPGROUND ROUTES

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

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

router.post("/", isLoggedIn, (req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const author = {
        id: req.user._id,
        username: req.user.username,
    };
    const newCampground = {
        name: name, 
        image: image, 
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

router.get("/new", isLoggedIn, (req,res) => {
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
router.get("/:id/edit", (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: foundCampground});
        };
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect(`/campgrounds/${req.params.id}`)
        }
    })
})

module.exports = router;