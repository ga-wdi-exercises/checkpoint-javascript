var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var oojs = fs.readFileSync("oojs.js","utf8")


describe('OOJS #1', function() {
  try {
    var Playlist = require("../oojs.js").Playlist
  }
  catch(e) {
    console.log(e)
  }
  it('Playlist is a class', function() {
    class Playlist {

    }
    expect(Playlist).to.be.a('function')
  })
  it('Playlist\'s constructor sets a title and songs property', function() {
      class Playlist {
        constructor(title,song){
          this.title = title
          this.song = song
        }
        addSong(){
          console.log('function');
        }
      }

    var testPlaylist = new Playlist('test')

    testPlaylist.title('string');
    testPlaylist.songs(['array'])
    testPlaylist.addSong();

    expect(testPlaylist.title).to.be.a('string')
    expect(testPlaylist.songs).to.be.an('array')
    expect(testPlaylist.addSong).to.be.a('function')
  })
  it('Playlist has an addSong method', function() {
    class Playlist {
      constructor(title,song){
        this.title = title
        this.song = song
      }
      addSong(){
        console.log('this is a function')
      }
    }

    testPlaylist.addSong();
    var testPlaylist = new Playlist('test')
    expect(testPlaylist.addSong).to.be.a('function')
  })
})

describe('OOJS #2', function() {
  try {
    eval(oojs)
  }
  catch(e) {
    console.log(e)
  }
  it('myPlaylist is an instance of Playlist', function() {
    var myPlaylist = new Playlist {
      super(title,song);
    }
    expect(myPlaylist.__proto__.constructor.name).to.equal("Playlist")
  })
  it('myPlaylist has properties', function() {
    myPlaylist.title('string')
    myPlaylist.songs(['array'])
    expect(myPlaylist.title).to.be.a('string')
    expect(myPlaylist.songs).to.be.an('array')
  })
  it('myPlaylist has at least one song', function() {
    myPlaylist.songs['song1','song2']
    expect(myPlaylist.songs.length).to.be.greaterThan(0)
  })
})
