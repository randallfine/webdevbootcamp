"use strict";

const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results",(req, res) => {
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}`;
    request(url, (err, resp, body) => {
        if(!err && resp.statusCode ===200){
            let data = JSON.parse(body);
            res.render("results", {data});
        }
    });
});

app.listen(process.env.PORT, process.env.ID, () => console.log("Server is a GO!"))