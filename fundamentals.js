// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:

var colors = ['orange','navy','baby-blue']


// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

var last = colors[2]


// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:

var favoriteColors = []




// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

  for (let i = 0; i < colors.length; i++)
{
    favoriteColors.push(colors[i])
}



// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:

var instructor = {
  name: "Andy",
  age: 31,
  hometown: "Washington"

  }



// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
instructor['wdi instructor']= true
