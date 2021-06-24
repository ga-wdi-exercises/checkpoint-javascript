function smallSubArray(s, arr) {
    let currentSum = 0
    let minSum = Infinity
    let windowStart = 0
    let windowSize = 0

    // iterate through array
    for (let i = 0; i < arr.length - 1; i++) {
        currentSum += arr[i]
        // console.log('-----------')
        // console.log("index:", i, ",", "current sum", currentSum)

        // condition to check if current sum is greater than s, if current sum is greater then move on to next window iteration 
        // 1st iter: windowSize become 1
        // 2 iter: [2,1] since not >= s, windowSize = 2
        // 3 iter : [2,1,5], greater thn s, compare currSum and minSum === set minSum (line 21) currSum is now 8 
        //          (line22) windowStart incre by 1 leaving you with your subarray [1,5]
        //                  since window updated from [2,1,5] to [1,5], we need to update our currSum as well
        //                  
        if (currentSum < s) {
            windowSize++

        }
        else {
            minSum = Math.min(minSum, windowSize)
            // windowStart += 1( mistake, incremented before our computation of subarray)
            // windowSize -= 1 // subarray at this point [1, 5], does this line code change it to [1]??? No. We realized we do not need this code.
            // 3rd iter: [2,1] ==> [1,5]
            // console.log(`current index is now ${i}`)
            let prev = arr[windowStart]
            // console.log(`current sum of: ${currentSum} will subtract ${prev}`)
            currentSum -= prev
            // console.log(`updated sum is now:${currentSum}`)
            windowStart += 1
        }

    }

    return minSum
}

let arr = [2, 1, 5, 2, 3, 2]
let s = 7
console.log(smallSubArray(s, arr))