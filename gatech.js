// rearrange an array to descending order

numbers = [1, 4, 9, 3, 7]
// max = Math.max(...numbers)
// console.log(max)

function descOrder(arr) {
    let newArray = []
    let max = Math.max(...arr)
    for (let i = 0; i < arr.length; i++) {
        // for (let j = 0; j < arr.length; j++)
        if (arr[i] < max) {
            let value = arr[i]
            console.log(value)
            // newArray = newArray.push(value)
        }
        // console.log(max)
    }
    // console.log(newArray)
}
descOrder(numbers)