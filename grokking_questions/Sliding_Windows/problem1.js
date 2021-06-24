// function findPermutation(str, pattern) {
//     let charFreqPat = {}
//     let windowStart = 0
//     let windowSize = 0

//     //iterate through pattern
//     for (let i = 0; i < pattern.length; i++) {
let letter = pattern[i]
charFreqPat[letter] = 1

//         // note about permutations: same frequency of characters
//     }
//     console.log(charFreqPat)
// }

const find_permutation = function (str, pattern) {
    let map = {}
    let start = 0
    let matched = 0 // would be 5 {a: 3, b: 1, c:1}

    pattern.split('').forEach(letter => {
        if (!(map[letter])) {
            map[letter] = 0
        }
        map[letter] += 1
    })

    for (let end = 0; end < str.length; end++) {
        // console.log(map[str[end]])
        // str = "abc"
        // end = 0
        // str[0] = a
        // if( map[a] != undefined), if a is found in map
        let char = str[end]
        if (map[char]) {
            matched++ // 
        }

        if (matched === pattern.length) {
            return true
        }

        if (end >= pattern.length - 1) {
            if (map[str[start]]) {
                matched--
            }
            start++
        }
    }
    return false
};

let string = "aaacb"
let Pattern = "abc"

// findPermutation(string, Pattern)

console.log(find_permutation(string, Pattern))