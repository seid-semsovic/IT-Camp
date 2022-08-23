// function isPalindrome(word) {
//   for (let i = 0; i < word.length / 2; i++) {
//     let beggining = word[i];
//     let ending = word[word.length - 1 - i];

//     if (beggining !== ending) {
//       return false;
//     }
//   }

//   return true;
// }

// let palindrome = isPalindrome(word);

// if (palindrome) {
//   console.log(`${word} je palindrom.`);
// } else {
//   console.log(`${word} nije palindrom.`);
// }
//----------------------------------------------------------------------------------------
let array = prompt("Enter some string");

let palindrom = true;
const str = array.replaceAll(" ", "").toLowerCase();
const len = str.length;

for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - 1 - i]) {
    palindrom = false;
    break;
  }
}

if (palindrom === true) {
  console.log("string is a palindrom");
} else {
  console.log("string is not a palindrom");
}
