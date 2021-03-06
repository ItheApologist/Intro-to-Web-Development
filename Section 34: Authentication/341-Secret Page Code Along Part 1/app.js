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

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

app.listen(3000, () => {
    console.log("Server hosted at http://localhost:3000");
});