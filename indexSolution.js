// Palindrome Swapper (15 mins)

// CHALLENGE

// Have the function PalindromeSwapper(str) take the str parameter being passed and determine
// if a palindrome can be created by swapping two adjacent characters in the string. If it is possible
// to create a palindrome, then your program should return the palindrome, if not then return the string -1.
// The input string will only contain alphabetic characters.

// For example: if str is "rcaecar" then you can create a palindrome by swapping the second and third characters,
// so your program should return the string racecar which is the final palindromic string.

// EXAMPLES

// "rcaecar"        =>  racecar
// "abcde"          =>  -1

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.
// Alternatively send an email with your solution to natorgom@gmail.com

function palindromeSwapper(str)  {
  for (let i=0; i<str.length-1 ; i++) {
    let newStr = swapStr(str, i, i+1)
    let reverseStr = newStr.split('').reverse().join('');
    if (newStr===reverseStr) return newStr;
  }

  function swapStr(str, first, last){
      return str.substr(0, first)
            + str[last]
            + str.substring(first+1, last)
            + str[first]
            + str.substr(last+1);
  }

  // code goes here
  return -1;
}

module.exports = palindromeSwapper;