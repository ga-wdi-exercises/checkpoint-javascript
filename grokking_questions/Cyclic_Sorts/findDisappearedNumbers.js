var findDisappearedNumbers = function (nums) {
    let result = []
    let i = 0
    //sorting logic
    while (i < nums.length) {
        const j = nums[i] - 1
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            result.push(nums[i] + 1)
        }
    }
    return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))