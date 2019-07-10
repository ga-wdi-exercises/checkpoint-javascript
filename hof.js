// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    knownLanguages: 3
  }, {
    name: "Keanu",
    age: 54,
    knownLanguages: 1
  }, {
    name: "Jasmine",
    age: 35,
    knownLanguages: 2
  }
]

// #1: Use the `map` array method to create a new array containing the names of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleNames`.
// Type your solution immediately below this line:

//I don't know the syntax for these without looking them up.
var peopleNames = []
for (var i = 0; i < people.length; i++) {
 peopleNames.push(people[i].name)
}



// people.map(function(x) {
//   peopleNames.push(people[x-1].name)
// })

console.log(peopleNames);


// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who know multiple languages. Assign the returned array
// to a variable called `polyglotPeople`.
// Type your solution immediately below this line:

var polyglotPeople = []

for (var i = 0; i < people.length; i++) {
if (people[i].knownLanguages > 1) {
  polyglotPeople.push(people[i].name)
}
}




