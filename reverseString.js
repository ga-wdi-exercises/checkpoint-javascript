function reverseString(string) {
    let reverseString = ''
    for (let i = string.length - 1; i >= 0; i--) {

        reverseString += string[i]
    }
    return reverseString
}

console.log(reverseString('abcd e'))
console.log(reverseString('233c de'));

//  Time Complexity = 0(n)