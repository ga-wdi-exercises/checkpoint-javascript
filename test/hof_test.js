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
    var peopleNames = []
    expect(peopleNames).to.be.an('array')
  })
  it('.map should be called on `people`', function() {

    people.map();

    expect(hof).to.include('people.map')
  })
  it('peopleNames should contain the names of each person in the people array', function() {
   var peopleNames = []  
    peopleNames.concat(names)
    let names = ["Layla", "Keanu", "Jasmine"]
    expect(peopleNames).to.deep.equal(names)
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
    var polyglotPeople = []
    expect(polyglotPeople).to.be.an('array')
  })
  it('.filter should be called on `people`', function() {
    people.filter();
    expect(hof).to.include('people.filter')
  })
  it('polyglotPeople only contains persons who know multiple languages', function() {
    let expectedPeople = people.filter((v,i) => i!==1)
    polyglotPeople.filter(expectedPeople);
    expect(polyglotPeople).to.deep.equal(expectedPeople)
  })
})
