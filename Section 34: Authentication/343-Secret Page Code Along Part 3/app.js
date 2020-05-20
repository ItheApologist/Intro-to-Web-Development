var express                 = require("express");
    app                     = express();
    mongoose                = require("mongoose");
    passport                = require("passport");
    bodyParser              = require("body-parser");
    LocalStrategy           = require("passport-local");
    passportLocalMongoose   = require("passport-local-mongoose");
    User                    = require("./models/user");

mongoose.connect("mongodb://localhost:27017/auth_demo_app");

app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false,
}));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

// AUTH ROUTES

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret");
        });
    });
});

app.listen(3000, () => {
    console.log("Server hosted at http://localhost:3000");
});