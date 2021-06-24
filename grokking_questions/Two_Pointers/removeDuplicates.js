// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.


// Using a two-pointer
const removeDuplicates = (nums) => {
    // slow pointer, we'll use this as a counter as well to return length
    let p1 = 0
    // fast pointer
    // let p2 = 1

    // iterate 'fast pointer' through array to check for duplicates
    for (let i = 1; i < nums.length; i++) {
        console.log(i)
        // if p1 value is equal to p2 value, then remove value and move p2 index up
        if (nums[p1] !== nums[i]) {
            p1 += 1
            nums[p1] = nums[i]
            // 1st iter: nums[0] = 2 is not equal to nums[1] = 3 so 2 becomes
        } else {
            i += 1
        }
    };
    return p1
}

let input = [2, 3, 3, 3, 6, 9, 9]
let input2 = [2, 2, 2, 11]

// console.log(removeDuplicates(input))
// console.log(removeDuplicates(input2))