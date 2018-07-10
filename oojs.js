// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Playlist` class with the following properties:
// - a `title` property that is a string determined by some input (passed into the constructor)
// - a `songs` property that is an empty array not determined by input (not passed into the constructor)
// - an `addSong` method that adds a song (string) to the `songs` array
// Type your solution immediately below this line:

class Playlist {
  constructor (title) {
    this.title = "title"
    this.songs= []
  }
addSong() = function {
  push.[](songs)
}
}
/* Stephanie pseudocode :
or... addSong(new)= function {
  push.[new](songs)
}
question: when we use function expressions if we pass an argument through i.e. addSong(new) and write the function with new... does the computer know to automatically match the two? how do I get the computer to make new strings
*/
// #2: Create an instance of the Playlist class and set it to a variable called `myPlaylist`
// Call the instance's `addSong` method to add a song to the instance's `songs` array
// Type your solution immediately below this line:

var myPlaylist = new Playlist {
  // i did not know how to do this portion since i could not successfully complete the above method
}



// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if(typeof Playlist !== 'undefined') {
  module.exports = {
    Playlist
  }
}
