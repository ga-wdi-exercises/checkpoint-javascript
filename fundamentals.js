// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:

var foods = [bananas, oranges, grapes];
console.log(foods.length); 

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

var last = foods[foods.length - 1];


// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:

var favoriteFoods[];


// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:


foods.forEach(function(item, index, array) {
    console.log(item, index);

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:

function Instructor(){
    this.name = 'Mike';
    this.class = 'WDI20';
    this.facility = 'General Assembly';
}


// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

Instructor[office] = 'has-office-hours'

/*
return function () {
    Instructor
}
*/
