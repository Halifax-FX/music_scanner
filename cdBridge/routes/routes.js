const express = require("express");
const router = express.Router();

const dao = require("../modules/Dao.js")

// https://api.discogs.com/database/search?q=5021456140770&token=wFcjcsFsYOmXrtDuIaQTMZAQHYkbzfPYMJwvedFw

router.get("/", function (req, res) {
    res.render("home");
})

router.get("/home", function (req, res) {
    res.render("home");
})

router.get("/add", function (req, res) {
    res.locals.add = true;
    res.render("addMusic");
})

router.post("/addAlbum", async function (req, res) {
    
    const barcode = req.body.barcode;
    const artist = req.body.artist;
    const album = req.body.album;

    console.log(barcode);
    console.log(artist);
    console.log(album);
    const songsArray = req.body.songs;
    console.log(songsArray);
    const albumDetails = {"barcode":req.body.barcode, "artistName": req.body.artist, "album":req.body.album, "year":req.body.year,
        "genre":req.body.genre};
    console.log(albumDetails);
    res.redirect("/home");
})

router.get("/myMusic", function (req, res) {
    res.locals.collection = true;
    res.render("myMusic");
})

router.get("/allArtists", async function (req, res) {
    res.locals.collection = true;
    const allArtistArray = await dao.getAllArtists();
    res.json(allArtistArray);
})

router.get("/allAlbums", async function (req, res) {
    res.locals.collection = true;
    const allAlbumsArray = await dao.getAllAlbums();
    res.json(allAlbumsArray);
})

router.get("/allSongs", async function (req, res) {
    res.locals.collection = true;
    const allSongsArray = await dao.getAllSongs();
    res.json(allSongsArray);
})

module.exports = router;