// console.log('breathe');

function findMaximum(arr, m) {
  let subsequences = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length !== m) {
      console.log(`Not equal to ${m}, array is ${arr.length} indices long`);
      console.log(arr);
    }
  }
}

let array = [2, 3, 5, 9];
findMaximum(array, 3);
