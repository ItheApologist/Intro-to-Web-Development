// Middleware for campground app

var middlewareObj   = {};
    Campground      = require("../models/campground");
    Comment         = require("../models/comment");

middlewareObj.checkCampgroundOwnership = (req, res, next) => {
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if(err) {
                res.flash("error", `ERROR: There was the following error: ${err}`)
                res.redirect("back");
            } else {
                if(foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.flash("error", "ERROR: You don not have access to this campground")
                    res.redirect("back");
                };
            };
        });
    } else {
        req.flash("error", "ERROR: You must be logged in to do that");
        res.redirect("back");
    };
};

middlewareObj.checkCommentOwnership = (req, res, next) => {
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if(err) {
                res.redirect("back");
            } else {
                if(foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                };
            };
        });
    } else {
        res.redirect("back");
    };
};

middlewareObj.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "ERROR: Please login first");
    res.redirect("/login");
};

module.exports = middlewareObj