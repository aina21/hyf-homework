/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will create playlist from database of songs.
 */

//prototype for checking empty string
String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

//prototype for checking equal string
String.prototype.isEqual = function (str) {
    return (this.toLowerCase().trim() === str.toLowerCase().trim());
};

Array.prototype.showAll = function(){
    for(song of this){
        console.log("id of song is : " + this.id + ", Title : " + this.title + ", Artist : " + this.artist); 
    }
}
// //song 
// class song {
//     constructor(id, title, artist) {
//         this.id = id;
//         this.title = title;
//         this.artist = artist;
//     }

//     showAll(){
//         console.log("id of song is : " + this.id + ", Title : " + this.title + ", Artist : " + this.artist); 
//     }
// }

//create song 
function createSong(id, title, artist){
    return {
        id:id,
        title:title,
        artists:artist
    }
}

//song database for saving song
let songDatabase = [];
//playList
let playlist = [];

//add song to database
function addSongToDatabase(song) {
    songDatabase.push(song);
}

//add song to playlist 
function addSongToPlaylist(title) {
    if (title.isEmpty()) {
        throw console.error("please add title");
    } else {
        playlist.push(getSongByTitle(title));
    }
}

//search song in list
function getSongByTitle(title) {
    if (title.isEmpty()) {
        throw console.error("Please add title");
    } else {
        return songDatabase.filter(song => {
            if (song.title.isEqual(title)) {
                return song;
            }
        })
    }
}

//search song by any type
function getSongs(comp = 'id', value, list = songDatabase) {
    return list.filter(song => {
        if (song[comp] === value) {
            return song;
        }
    })
}

//remove duplicate 
function removeDuplicate(list = songDatabase, comp = 'id') {
    return list.filter((song, index, arr) => {
        return arr.map(mapObj => mapObj[comp]).indexOf(song[comp]) === index;
    });
}

//run
//add song to database
addSongToDatabase(createSong(3, "Nothing Else Matters", "Metallica"));
addSongToDatabase(createSong(2, "Zombie", "The Cranberries"));
addSongToDatabase(createSong(1, "Paint It, Black", "The Rolling Stone"));
addSongToDatabase(createSong(2, "Zombie", "The Cranberries"));
addSongToDatabase(createSong(4, "Highway to Hell", "ACDC"));
addSongToDatabase(createSong(5, "(I Can\'t Get No) Satisfaction", "The Rolling Stone"));
addSongToDatabase(createSong(6, "Dream on", "Aerosmith"));
addSongToDatabase(createSong(7, "Try", "P!nk"));
addSongToDatabase(createSong(11, "Try", "Colbie Caillat"));
addSongToDatabase(createSong(2, "Zombie", "The Cranberries"));
addSongToDatabase(createSong(8, "Imagine", "John Lennon"));


//add song to favorite
addSongToPlaylist("try");
addSongToPlaylist("zombie");
console.log("Play list : ");
playlist.showAll();

//search for songs with artist
const searchedSong = getSongs("artist", "The Rolling Stone", songDatabase);
console.log("First search ");
searchedSong.showAll();


//remove duplicate
songDatabase = removeDuplicate(songDatabase, "id");
console.log("Database after remove duplicate is ");
songDatabase.showAll();
playlist = removeDuplicate(playlist, "title")
console.log("Playlist after remove duplicate is ");
playlist.showAll()

//search in database with title
const searchedSong1 = getSongByTitle("try");
console.log("Second search: ");
searchedSong1.showAll();
const searchedSong2 = getSongByTitle("when is enough too");
console.log("Third search: "); // returns undefined
searchedSong2.showAll();



