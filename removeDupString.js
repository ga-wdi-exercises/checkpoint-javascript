function foo(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i] + 1)
            input.splice(input[i] + 1)
    }
    return input
}

console.log(foo('abbbcd')); // should output 'abcd' in the console
console.log(foo('abcddaea')); // should output 'abcde' in the console
