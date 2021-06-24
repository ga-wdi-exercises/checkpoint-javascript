// Given a sorted array....

// clarify your assumptions (ask interviewers ): is there any time I can could possibly get an empty input array?
// based on answer, NEGOTIATE what to "return"

// Edge cases: given 2 cases 
// corner cases: 

const make_squares = function (arr) {

    if (arr.length < 2) return arr
    squares = []

    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        squares = squares.push(arr[i * i])
        
    }
    return squares;
};

console.log(make_squares([-2, -1, 0, 2, 3]))
console.log(make_squares([-3, -1, 0, 1, 2]))