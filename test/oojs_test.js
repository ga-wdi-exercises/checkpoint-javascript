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
  })
  it('Playlist\'s constructor sets a title and songs property', function() {
    class Playlist {
      constructor (title, songs){
        this.title = title
        this.songs = songs
      }
    }
  })
  it('Playlist has an addSong method', function() {
    class Playlist {
      constructor (title, songs) {
        this.title = title
        this.songs = songs
      }
      addSong () {

      }
    }
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
    myPlaylist
  })
  it('myPlaylist has properties', function() {
    expect(myPlaylist.title).to.be.a('string')
    expect(myPlaylist.songs).to.be.an('array')
  })
  it('myPlaylist has at least one song', function() {
    expect(myPlaylist.songs.length).to.be.greaterThan(0)
  })
})
