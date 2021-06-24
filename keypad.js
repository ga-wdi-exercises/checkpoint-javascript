console.log('you got this!');

function numKeypadSolutions(wordlist, keypads) {
  let intArr = [];
  // iterate through keypad to find key letter aka first letter of keys
  for (let i = 0; i < keypads.length; i++) {
    let key = keypads[i][0];
    console.log(key);
    let keypadCombo = keypads[i];
    console.log(keypadCombo);
    for (let p = 0; p < wordlist.length; p++) {
      let word = wordlist[p];
      console.log(word);
      //   console.log(
      //     `Checking index ${i}: First letter is ${key}, checking if word - ${word} - contains ${key} and matches`
      //   );
      //   if (word.length < 5) {
      //     console.log('Word must be at least 5 characters');
      //   }
      // }
    }
  }
}

let wl = ['APPLE', 'PLEAS', 'PLEASE'];
let kp = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];
numKeypadSolutions(wl, kp);
