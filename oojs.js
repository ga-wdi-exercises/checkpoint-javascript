// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Playlist` class with the following properties:
// - a `title` property that is a string determined by some input (passed into the constructor)
// - a `songs` property that is an empty array not determined by input (not passed into the constructor)
// - an `addSong` method that adds a song (string) to the `songs` array
// Type your solution immediately below this line:

class Playlist {
  constructor(title, songs = []) {
    this.title = title
    this.songs = songs
  }
}

function addSong(track) {
  Playlist.songs.push(track)

  addsong(track)
  track = 'spiderman'
}
console.log(Playlist.songs)

// song = 'string'


// var Playlist class = {
//   constructor('title')
//   this.title = title
//   this.addsong = addsong
// }
// addsong('this')
// console.log(songs)

// #2: Create an instance of the Playlist class and set it to a variable called `myPlaylist`
// Call the instance's `addSong` method to add a song to the instance's `songs` array
// Type your solution immediately below this line:

// var myPlayList = Playlist



// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (typeof Playlist !== "undefined") {
  module.exports = {
    Playlist
  };
}
