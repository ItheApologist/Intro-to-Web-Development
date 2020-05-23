var express     = require("express");
    router      = express.Router();
    passport    = require("passport");
    User        = require("../models/user");

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

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
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
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
    res.redirect("/campgrounds");
});

module.exports = router;