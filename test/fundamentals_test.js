var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var fundamentals = fs.readFileSync("fundamentals.js","utf8")

describe('Fundamentals #1', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('foods is an array', function() {
    var foods = ['apple', 'orange', 'strawberry']
  })
  it('foods contains three strings', function() {
    foods = ['apple', 'orange', 'strawberry']
  })
})

describe('Fundamentals #2', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #3')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('last is a string', function() {
    var last = ''
  })
  it('last is equal to the last item in foods', function() {
    last = foods[2]
  })
})

describe('Fundamentals #3', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #3'),
    fundamentals.indexOf('// #4')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteFoods is defined', function() {
   var favoriteFoods = ['candy', 'pizza']
  })
  it('favoriteFoods is an array', function() {
    favoriteFoods = ['candy', 'pizza']
  })
})

describe('Fundamentals #4', function() {
  let section =
    fundamentals.slice(
      fundamentals.indexOf('// #1'),
      fundamentals.indexOf('// #2')
    )
    +
    fundamentals.slice(
      fundamentals.indexOf('// #3'),
      fundamentals.indexOf('// #5')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteFoods contains three foods', function() {
    var favoriteFoods = ['pizza', 'candy', ]
  })
  it('favoriteFoods contains the same values as foods', function() {
    expect(
      favoriteFoods = foods
    )
  })
})

describe('Fundamentals #5', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5'),
    fundamentals.indexOf('// #6')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('instructor is an object', function() {
    var instructor = {

    }
  })
  it('instructor has three key-value pairs', function() {
    var instructor = {
      name: 'Joe',
      age: '23',
      height: '6ft'
    }
  })
  it('instructor does not have a \'has-office-hours\' property', function() {
    var instructor = {
      name: 'Joe',
      age: '23',
      height: '6ft'
    }
  })
})

describe('Fundamentals #6', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('instructor has four key-value pairs', function() {
    var instructor = {
      name: 'Joe',
      age: '23',
      height: '6ft',
      favColor: 'blue'
    }
  })
  it('instructor has a has-office-hours property', function() {
    var instructor = {
      name: 'Joe',
      age: '23',
      height: '6ft',
      favColor: 'blue',
      officeHours: '9-5'
    }
  })
  it('has-office-hours has a boolean value', function() {
    var instructor = {
      name: 'Joe',
      age: '23',
      height: '6ft',
      favColor: 'blue',
      officeHours: true
    }
  })
})
