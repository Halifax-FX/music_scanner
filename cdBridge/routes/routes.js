const express = require("express");
const router = express.Router();

// https://api.discogs.com/database/search?q=5021456140770&token=wFcjcsFsYOmXrtDuIaQTMZAQHYkbzfPYMJwvedFw

router.get("/home", function (req, res) {
    res.render("home");
})

router.get("/add", function (req, res) {
    res.render("addMusic");
})

module.exports = router;