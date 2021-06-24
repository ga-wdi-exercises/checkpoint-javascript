// Given an array of sorted numbers and a target sum, 
// find a pair in the array whose sum is equal to the given target.

// Note: we have to assume the array is sorted in order to check duplicates, elements could be a pair

const pairTargetSum = (arr, target) => {
    let pointer = 0
    let endPoint = arr.length - 1
    while (pointer < endPoint) {
        let sum = arr[pointer] + arr[endPoint]
        if (sum === target) {
            return [pointer, endPoint]
        }

        if (sum < target) {
            pointer += 1
        } else {
            endPoint -= 1
        }
    }
    return [-1, -1]
}

let array = [1, 2, 3, 4, 6]
let target = 6
console.log(pairTargetSum(array, target))