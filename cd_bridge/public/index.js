window.addEventListener("load", async function() {
    const barcode = document.querySelector("#barcode");
    console.log(barcode.value);

    const result = document.querySelector("#grabme");
    const button = document.querySelector("#button")
    button.addEventListener("click", grabData(barcode.value));
    
   async function grabData(code) {
        const url = `https://api.discogs.com/database/search?q=${code}&token=wFcjcsFsYOmXrtDuIaQTMZAQHYkbzfPYMJwvedFw`
        console.log(url);

        const response = await fetch(url);
        const info = await response.json();
        console.log(info);
        const id = info.results[0].id;
        const year = info.results[0].year;
        const genres = info.results[0].genre;
        const title = info.results[0].title
        console.log(id);
        console.log(year);
        console.log(title);
        genres.forEach(element => {
           console.log(element); 
        });

        const artistAndTitle = title.split('-')
        console.log(artistAndTitle);
        const artist = artistAndTitle[0];
        console.log(artist.trim());
        const album = artistAndTitle[1];
        console.log(album.trim());
    }
});