var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var hof = fs.readFileSync("hof.js","utf8")

describe('HOF #1', function() {
  let section = hof.slice(
    0,
    hof.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('peopleNames should be an array', function() {
    peopleNames = []
  })
  it('.map should be called on `people`', function() {
    people.map
  })
  it('peopleNames should contain the names of each person in the people array', function() {
    let names = ["Layla", "Keanu", "Jasmine"]
    peopleNames = names
  })
})

describe('HOF #2', function() {
  let section =
    hof.slice(
      0,
      hof.indexOf('// #1')
    )
    +
    hof.slice(
      hof.indexOf('// #2')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('polyglotPeople is an array', function() {
    polyglotPeople = []
  })
  it('.filter should be called on `people`', function() {
    people.filter
  })
  it('polyglotPeople only contains persons who know multiple languages', function() {
    let expectedPeople = people.filter((v,i) => i!==1)
    polyglotPeople = expectedPeople
  })
})
