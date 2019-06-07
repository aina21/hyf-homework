/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will create playlist from database of songs.
 */

//song 
class song {
    constructor(id, title, artist) {
        this.id = id;
        this.title = title;
        this.artist = artist;
    }

}

//song database for saving song
let songDatabase = [];
//playList
const playlist = [];

//add song to database
function addSongToDatabase(song) {
    songDatabase.push(song);
}

//add song to playlist 
function addSongToPlaylist(title){
    playlist.push(getSongByTitle(title));
}

//search song in list
function getSongByTitle(title) {

    return songDatabase.filter(song => {
        if ( song.title.toLowerCase().trim() === title.toLowerCase().trim()) {
                return song;
            } 
    })
}

//search song with by any type
function getSongs(comp, value, list){
    return list.filter(song => {
        if ( song[comp] === value) {
                return song;
            } 
    })
}

//remove duplicate 
function removeDuplicate(list, comp) {
    return list.filter((song, index, arr) => {
        return arr.map(mapObj => mapObj[comp]).indexOf(song[comp]) === index;
    });
}

//run
//add song to database
addSongToDatabase(new song(3, 'Nothing Else Matters', 'Metallica'));
addSongToDatabase(new song(2, 'Zombie', 'The Cranberries'));
addSongToDatabase(new song(1, 'Paint It, Black', 'The Rolling Stone'));
addSongToDatabase(new song(2, 'Zombie', 'The Cranberries'));
addSongToDatabase(new song(4, 'Highway to Hell', 'ACDC'));
addSongToDatabase(new song(5, '(I Can\'t Get No) Satisfaction', 'The Rolling Stone'));
addSongToDatabase(new song(6, 'Dream on', 'Aerosmith'));
addSongToDatabase(new song(7, 'Try', 'P!nk'));
addSongToDatabase(new song(11, 'Try', 'Colbie Caillat'));
addSongToDatabase(new song(2, 'Zombie', 'The Cranberries'));
addSongToDatabase(new song(8, 'Imagine', 'John Lennon'));


//add song to favorite
addSongToPlaylist('try');
addSongToPlaylist('zombie');
console.log(playlist);

//search for songs with artist
const searchedSong = getSongs('artist', 'The Rolling Stone', songDatabase);
console.log(searchedSong);


//remove duplicate
songDatabase = removeDuplicate(songDatabase, 'id');
console.log(songDatabase);

//search in database with title
const searchedSong1 = getSongByTitle('try');
console.log(searchedSong1);
const searchedSong2 = getSongByTitle('When is eTrynough too');
console.log(searchedSong2); // returns undefined



