function decodeVariations(S) {
	/**
	@param S: string
	@return: integer
	*/
	let count = 0
	for (let i = 0; i < S.length; i++) {
		let char = S[i]
		console.log(char)
		// if
	}
}

code = '1262'
// 		^ - 1 =A
//      ^^ -- 12 = L
console.log(decodeVariations(code))


// Solution is Dynamic Programming, perfect for variations
// function decodeVariations(S):
// 	N = S.length
// dp = new Array(N)
// dp[N] = 1
// for i from N - 1 to 0:
// if S[i] == '0':
// 	dp[i] = 0
// else if S[i] == '1':
// 	dp[i] = dp[i + 1] + dp[i + 2]
// else if S[i] == '2':
// 	dp[i] = dp[i + 1]
// if i + 1 < S.length && S[i + 1] <= '6':
// 	dp[i] += dp[i + 2]
// else:
// dp[i] = dp[i + 1]

// return dp[0]