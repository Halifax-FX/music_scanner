DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS album;
DROP TABLE IF EXISTS artist;

CREATE TABLE artist (
id INTEGER NOT NULL,
artistName VARCHAR(100) NOT NULL PRIMARY KEY,
genre VARCHAR(20)
);

CREATE TABLE album (
albumName VARCHAR(100)  NOT NULL PRIMARY KEY,
year INTEGER NOT NULL,
barcode INTEGER NOT NULL,
artistName VARCHAR NOT NULL,
FOREIGN KEY (artistName) REFERENCES artist(artistName) ON DELETE CASCADE
);

CREATE TABLE songs (
artistName VARCHAR(100) NOT NULL,
albumName VARCHAR(100) NOT NULL,
trackNumber INTEGER,
songName VARCHAR(100) NOT NULL,
songLength DOUBLE,
FOREIGN KEY (artistName) REFERENCES artist(artistName),
FOREIGN KEY (albumName) REFERENCES album(albumName)
);

INSERT INTO artist(id, artistName, genre) VALUES 
(1, "modest mouse", "alternative"),
(2, "motorhead", "heavy metal"),
(3, "red hot chili peppers", "rock");

INSERT INTO album(albumName, year, barcode, artistName) VALUES
("no one's first and you're next", 2009,  886974628927, "modest mouse"),
("on parole", 1997, 724385479427, "motorhead");

INSERT INTO songs (artistName, albumName, trackNumber, songName) VALUES
("modest mouse", "no one's first and you're next",1, "satellite skin"),
("modest mouse", "no one's first and you're next",2, "guilty cocker spaniels"),
("modest mouse", "no one's first and you're next",3, " autumn beds"),
("modest mouse", "no one's first and you're next",4, "the whale song"),
("modest mouse", "no one's first and you're next",5, "perpetual motion machine"),
("motorhead", "on parole", 1, "motorhead"),
("motorhead", "on parole", 2, "on parole"),
("motorhead", "on parole", 3, "vibrator"),
("motorhead", "on parole", 4, "iron horse/born to lose"),
("motorhead", "on parole", 5, "city kids");
