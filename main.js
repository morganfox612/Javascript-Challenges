// Reverse a string

function reverseWord() {
let str = prompt("Please enter a word or a phrase")
reverseString = str.split("").reverse().join("")

console.log(reverseString)
}

// FizzBuzz

function fizzBuzz() {
let i = 0
integers = []

while(i < 100) {
integers.push(i+1)
i++
}

// block variable- any code between two curly braces; or code that is indented
for (x of integers) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz")
  } else if (x % 5 == 0) {
    console.log("Buzz")
  } else if (x % 3 == 0) {
  console.log("Fizz")
  } else {
  console.log(x)
  }
}
}

// Pig Latin

let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(string) {
   str = prompt("Enter a word or a phrase")
    let a = str.substr(1)
    let b = str.charAt(0)
    if(!(vowels.includes(b))){
    return a + b + "ay"
  } else{
    return str + "ay"
  }
}
