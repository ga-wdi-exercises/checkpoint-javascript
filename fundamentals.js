// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:

let foods = ['icecream', 'candy', 'fish']

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

let last = foods[foods.length [1]]

// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:

let favoriteFoods = []

// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

for (let i = 0; i < foods.length; i++) {
  favoriteFoods.push(foods[i])
}

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
let instructor = {
  name: 'Charles',
  class: 'WDI19',
  strengths: 'Web Development'
}

// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
instructor['has-office-hours'] = true
