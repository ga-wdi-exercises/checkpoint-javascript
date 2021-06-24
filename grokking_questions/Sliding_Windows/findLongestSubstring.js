function findLongestSubstring(str, k) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {}; // we use a Hash Map to remember the frequency count for each character

    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // console.log(charFrequency[rightChar])
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        // key is letter, value is frequency 
        charFrequency[rightChar] += 1;
        console.log(charFrequency)
        // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
        while (Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart];
            console.log(leftChar)
            charFrequency[leftChar] -= 1; // deletes a frequency count from the start of window 
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window (i.e. window would be in one case = "raaci")
        }
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        console.log("max is:", maxLength)

    }

}

let string = "araaci"
let k = 2

console.log(findLongestSubstring(string, k))