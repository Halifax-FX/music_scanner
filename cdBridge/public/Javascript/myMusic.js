
window.addEventListener("load", async function () {

    let artist = document.querySelector("#flexCheckArtist");
    let album = document.querySelector("#flexCheckAlbum");
    let song = document.querySelector("#flexCheckSongs");
    let artistSelector = document.querySelector("#artist-selector");

    artist.addEventListener('click', async function () {
        artistSelector.innerHTML = '';
        let allArtists = await fetchAllArtists();
        for (i = 0; i < allArtists.length; i++) {
            let selector = document.createElement("option")
            selector.innerHTML = `${i+1}. ${allArtists[i].artistName}`;
            artistSelector.appendChild(selector);
        }
    });

    album.addEventListener('click', async function () {
        artistSelector.innerHTML = '';
        let allAlbums = await fetchAllAlbums();
        for (i = 0; i < allAlbums.length; i++) {
            let selector = document.createElement("option")
            selector.innerHTML = `${i+1}. ${allAlbums[i].albumName}`;
            artistSelector.appendChild(selector);
        }
    });

    song.addEventListener('click', async function () {
        artistSelector.innerHTML = '';
        let allSongs = await fetchAllSongs();
        for (i = 0; i < allSongs.length; i++) {
            let selector = document.createElement("option")
            selector.innerHTML = `${i+1}. ${allSongs[i].songName}`;
            artistSelector.appendChild(selector);
        }
    });

    async function fetchAllArtists() {
        const response = await fetch("/allArtists");
        const allArtists = await response.json();

        return allArtists
    };

    async function fetchAllAlbums() {
        const response = await fetch("/allAlbums");
        const allAlbums = await response.json();

        return allAlbums
    };

    async function fetchAllSongs() {
        const response = await fetch("/allSongs");
        const allSongs = await response.json();

        return allSongs;
    };
});