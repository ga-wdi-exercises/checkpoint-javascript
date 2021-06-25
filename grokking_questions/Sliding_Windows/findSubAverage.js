//  Introduction to Grokking the Coding Interview: Patterns for Coding Questions

/*
1. initiate variables:
    a. array to hold avg results
    b. windowstart 
2. iterate through array with start of end of window so it increases at the beginning to K - 1 (one less since indices start at zero)
3. condition: check to see if end of window is greater than or equal to 
*/

function maxSum(arr, k) {
    let result = []
    let windowSum = 0.0,
        windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if (windowEnd >= K - 1) {
            result.push(windowSum / 5)
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return result
}

let array = [1, 3, 2, 6, -1, 4, 1, 8, 2]
let K = 5
console.log(maxSum(array, K))