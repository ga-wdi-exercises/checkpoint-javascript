// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    knownLanguages: 3
  },
  {
    name: "Keanu",
    age: 54,
    knownLanguages: 1
  },
  {
    name: "Jasmine",
    age: 35,
    knownLanguages: 2
  }
];

// #1: Use the `map` array method to create a new array containing the names of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleNames`.
// Type your solution immediately below this line:

var peopleNames = [];
for (let i = 0; i < people.length; i++) {
  let firstName = name[i];
  let names = people.name;
  peopleNames.push(names);
  return peopleNames;
}

// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who know multiple languages. Assign the returned array
// to a variable called `polyglotPeople`.
// Type your solution immediately below this line:
function multipleLanguages(knownLanguages) {
  return people.knownLanguages > 1;
}

const moreThan1 = [];
for (let i = 0; i < people.length; i++) {
  if (multipleLanguages(people[i])) {
    moreThan1.push(people[i]);
  }
}
const multiple = people.filter(knownLanguages => {
  return people.knownLanguages > 1;
});

// = people.filter(people.knownLanguages);
// if (knownLanguages > 1) {
//   console.log(multipleLanguages);
