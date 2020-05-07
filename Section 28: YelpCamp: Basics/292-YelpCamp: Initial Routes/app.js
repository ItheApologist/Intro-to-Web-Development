const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("landing");
});

app.get("/campgrounds", (req,res) =>{
    const campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d287cd19749c1_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417d287cd19749c1_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e5074417d287cd19749c1_340.jpg"},
    ];
    res.render("campgrounds", {campgrounds: campgrounds})
})

app.listen(3000, () => {
    console.log("YelpCamp app is being served at http://localhost:3000");
});