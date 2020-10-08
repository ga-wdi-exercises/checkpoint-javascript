// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:
var foods = ["Pizza", "Beef", "Cereal"]
console.log(foods)

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
var last = foods[2]
console.log(last)


// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
var favoriteFoods = [];


// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

foods.forEach(function pushFav(food) {favoriteFoods.push(food)})
console.log(favoriteFoods)

// for (i = 0; i < foods.length; i++) {
//     favoriteFoods.push([i])
//     console.log(favoriteFoods)
// } // what's wrong ? 


// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
var instructor = {
    firstName : "Rob",
    lastName : "Tyne", 
    age : "55"
};


// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
instructor["has-office-hours"] = true // how to change this? 

console.log(instructor)