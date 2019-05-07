// FizzBuzz

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
