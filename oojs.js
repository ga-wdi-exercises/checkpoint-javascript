// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Playlist` class with the following properties:
// - a `title` property that is a string determined by some input (passed into the constructor)
// - a `songs` property that is an empty array not determined by input (not passed into the constructor)
// - an `addSong` method that adds a song (string) to the `songs` array
// Type your solution immediately below this line:
class Playlist {
  constructor(title, addSong) {
    (this.title = title), (this.songs = []), (this.addSong = addSong);
  }
}
// when trying to create a method of addSong (which would be a funciton, the way i set it up did not classify "Playlist" as a class so I left it off
// but i undertstand what a method is, i just had the wrong syntax

// #2: Create an instance of the Playlist class and set it to a variable called `myPlaylist`
// Call the instance's `addSong` method to add a song to the instance's `songs` array
// Type your solution immediately below this line:

var myPlaylist = new Playlist();

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (typeof Playlist !== "undefined") {
  module.exports = {
    Playlist
  };
}
