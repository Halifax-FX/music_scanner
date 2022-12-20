const express = require("express");
const router = express.Router();

// https://api.discogs.com/database/search?q=5021456140770&token=wFcjcsFsYOmXrtDuIaQTMZAQHYkbzfPYMJwvedFw


router.get("/disc", async function(req, res) {
    const response = await fetch("https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1");
    let info = await response.json();

    res.render(info);
    console.log(info);
})

module.exports = router;