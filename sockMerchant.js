function sockMerchant(n, ar) {
  console.log("Let's find the pairs!");
  let count = 0;
  ar = ar.sort()
  for (let i = 0; i < ar.length; i++) {
    let valueUp = ar[i + 1];
    let values = ar[i];
    let idxUp = i + 1
    console.log(i);
    console.log('length =', ar.length)
    if ((values === valueUp)) {
      console.log(ar)
      console.log(`Checking if ${values} at index ${i} = ${valueUp} at index ${idxUp}`)
      console.log('Found a pair!')
      let removed = ar.splice(i, 1)
      console.log('removed idx ', removed)
      count++;
    }
    else {
      console.log(ar)
      console.log('no match')
    }
  }
  console.log('count =', count);
}

let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// let removedSocks = socks.splice(6, 2)
// console.log(socks)
// console.log(removedSocks)

sockMerchant(9, socks);
