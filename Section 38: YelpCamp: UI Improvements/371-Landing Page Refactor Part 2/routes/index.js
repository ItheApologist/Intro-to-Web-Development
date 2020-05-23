var express     = require("express");
    router      = express.Router();
    passport    = require("passport");
    User        = require("../models/user");

router.get("/", (req,res) => {
    res.render("landing");
});


// Register form route
router.get("/register", (req, res) => {
    res.render("register");
});

// Register logic handler
router.post("/register", (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) =>{
        if (err) {
            req.flash("error", `ERROR: Registration failed with the following error: ${err}.`);
            console.log(err);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", `Registration successful! Welcome to YelpCamp ${user.username}!`);
            res.redirect("/campgrounds");
        });
    });
});

// Login route
router.get("/login", (req, res) => {
    res.render("login");
});

// Login logic handler
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
    }),
(req, res) => {});

// LOGOUT ROUTE

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged you out")
    res.redirect("/campgrounds");
});

module.exports = router;