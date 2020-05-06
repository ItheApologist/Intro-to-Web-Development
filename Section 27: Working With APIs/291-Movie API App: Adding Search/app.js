const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000");
});

app.get("/", (req,res) => {
    res.render("search")
})

app.get("/results", (req,res) => {
    const query = req.query.search
    const url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            res.render("results", {data: data});
        };
    });
});