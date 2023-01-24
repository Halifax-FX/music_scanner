// Imports required modules.
const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function addArtist(artist) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        INSERT INTO artist (artistName, genre) VALUES 
        (${artist.name}, ${artist.genre});`)
};

async function getAllArtists() {
    const db = await dbPromise;

    const allArtists = await db.all(SQL`
        SELECT artistName FROM artist`);

    return allArtists;
}

async function addAlbum(album) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        INSERT INTO album (albumName, year, barcode, artistName) VALUES
            (${album.name}, ${album.year}, ${album.barcode}, ${album.artist});`)
};

async function getAllAlbums() {
    const db = await dbPromise;

    const allAlbums = await db.all(SQL`
        SELECT albumName FROM album`);

    return allAlbums;
};

async function addSong(songs) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        INSERT INTO songs (artistName, albumName, trackNumber, songName) VALUES
            (${songs.artist}, ${songs.album}, ${songs.trackNumber}, ${songs.name});`)
};

async function getAllSongs() {
    const db = await dbPromise;

    const allSongs = await db.all(SQL`
        SELECT songName FROM songs`);

    return allSongs;
}

//Export the modules
module.exports = {
    addArtist,
    getAllArtists,
    addAlbum,
    getAllAlbums,
    addSong,
    getAllSongs
};