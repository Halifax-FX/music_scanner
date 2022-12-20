window.addEventListener("load", async function() {

    // Grabs all the elements from the page that need populating
    let barcode = document.querySelector("#scannedBarcode");
    let displayArtist = document.querySelector("#artist");
    let displayAlbum = document.querySelector("#album");
    let displayYear = document.querySelector("#year");
    let displayGenre = document.querySelector("#genre");
    let displaySongs = document.querySelector("#songs");

    // updates values if there is a barcode already present
    if (barcode.value != null) {
        getInfoFromBarcode(barcode.value);
    }

    // updates results fieldset when new barcode is input
    barcode.addEventListener("blur", updateBarcodeValue);

    // function that updates the value for the bar and calls the main getInfo function
    async function updateBarcodeValue() {
        let value = document.querySelector("#scannedBarcode");
        barcode.value = value.value;
        getInfoFromBarcode(barcode.value);
    }

    // Main helper function that makes an api call to the discogs registery based on the barcode and updates the info fields with the results
    async function getInfoFromBarcode(source) {

        // generates and sends the request, then awaits the fetch request and converts to a json format
        const url = `https://api.discogs.com/database/search?q=${source}&token=wFcjcsFsYOmXrtDuIaQTMZAQHYkbzfPYMJwvedFw`;
        const response = await fetch(url);
        const info = await response.json();

        // grabs the uri to get the tracklist and calls another helper function
        const masterList = info.results[0].master_url;
        getTrackList(masterList);

        // Splits out the artist and album info
        const artistAndTitle = info.results[0].title;
        const splitTitles = artistAndTitle.split('-')
        const artist = splitTitles[0];
        const album = splitTitles[1];
        
        // Updates result displays
        displayArtist.value = artist;
        displayAlbum.value = album;
        displayYear.value = info.results[0].year; 
        displayGenre.value = info.results[0].genre[0];
    }

    // Helper function that grabs the tracklists and populates the songlist result.
    async function getTrackList(url) {
        const response = await fetch(url);
        const info = await response.json();

        let trackList = "";
        const songList = info.tracklist;
        songList.forEach(element => {
            trackList += `${element.position}. ${element.title}  ${element.duration} \n`
        });
        displaySongs.setAttribute("rows", songList.length);
        displaySongs.value = trackList;
    }
})