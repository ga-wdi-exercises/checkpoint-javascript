// function maxSubArray(k, arr) {
//     let maxSum = 0,
//     windowSum = 0,
//     windowStart = 0;
  
//     for (window_end = 0; window_end < arr.length; window_end++) {
//       windowSum += arr[window_end]; // add the next element
//       // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//       if (window_end >= k - 1) {
//         maxSum = Math.max(maxSum, windowSum);
//         windowSum -= arr[windowStart]; // subtract the element going out
//         windowStart += 1; // slide the window ahead
//       }
//     }
//     return maxSum;
//   }

//   console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
//   console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

  function maxSum(arr, K) {
    const result = []
    let windowSum = 0
    let windowStart = 0
    let maxSum = 0
    
    // iterate through array
    // compute sum of each subarray of size K
    // compare each sum, and set maxSum = currSum if currSum > maxSum
    for( let i = 0; i < arr.length; i++){
    windowSum += arr[i]
    // 0: windowSum = 2
    // 1: windowSum = 3
    // 2: windowSum(2+1+5) = 8
    // 3: windowSum(1+5+1) = 9
    // = 7
    // 4: windowSum = 7 +
    // adding currSum until we reach subarray size of K
    
    if( i > 2){
    windowSum -= arr[windowStart++]
    // 3: windowSum = 9( from 4 elems) - arr[0] = 8
    // 3: 9 - 2 = 7
    }
    // 8, 7,
    console.log(`windowSum at index[${i}] :${ windowSum}`)
    if( i >= 2 && windowSum > maxSum) maxSum = windowSum
    }
    // you could use Math.max instead of 'if' statement here to return the max using the built in js method
    
    return maxSum;
    }
    
    let array = [2,1,5,1,3,2];
    // 8,7,9,6
    let k=3;
    
    console.log(maxSum(array,k));
    
    module.exports = maxSum;

    