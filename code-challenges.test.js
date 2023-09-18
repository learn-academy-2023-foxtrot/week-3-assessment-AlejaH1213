// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciFunc", () =>{
  it("returns an array containing the Fibonacci sequence", ()=>{

  
  const fibonacciLength1 = 6
//   // Expected output: [1, 1, 2, 3, 5, 8]

  const fibonacciLength2 = 10
//   // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  expect(fibonacciFunc(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
  expect(fibonacciFunc(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// Failed successfully: ReferenceError: fibonacciFunc is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// Name:fibonacciFunc
// Input: a number (greater than 2)
// Output: an array containing the Fibonacci sequence
// Process: 
// - first im going to create a function and name it fibonacciFunc
// - this function is going to take as a parameter "Length" to symbolize that the argument will be a number that it is going to determine the lenght of the sequence
// - then im going to create an array that is going to store the sequence and I'll put on it the first two values because i need my for loop to have something to start with
// - then im going to create a for loop and make sure that I start at index 2 because I already have the first two indexes in my array and then inside of the loop im going to create a new variable where the math of adding one number to another one happens, using the index of 1 and index of 2 to start, then im going to push it into my fibonacci array 
const fibonacciFunc = (length) => {
  const fibonacciSequence = [1, 1]

  for (let i = 2; i < length ; i++) {
    const nextNumber = fibonacciSequence [i - 1] + fibonacciSequence [i - 2]
    fibonacciSequence.push(nextNumber)
  }
  return fibonacciSequence
}

//test passed

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("leastToGreatest", () => {
  it("returns an array of the values sorted from least to greatest.", () =>{
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
//     // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
//     // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])

  })

})
// Failed succesfully: ReferenceError: leastToGreatest is not defined 

// b) Create the function that makes the test pass.

// Pseudo code:
// name: leastToGreatest
// input: takes in an object
// output: returns an array of the values sorted from least to greatest
// process: 
// - First I'm going to create a function named leastToGreatest and put object as a parameter
// - inside of the function I will use the method object.values() so it will give me an array of the values inside the keys in the object and ill store that in a variable. then I'll use the sort method and put in it the parameter so it understand that i want the sorting to be from smallest to biggest  and store the sorted array in another variable and return that variable
const leastToGreatest = (object) => {
  const arrayValues = Object.values(object)
  const arrayOrder = arrayValues.sort((a, b) => (a - b))
  return arrayOrder
}

// test passed

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("cummulativeSum", () =>{
  it("returns an array of the accumulating sum", () =>{
    const accountTransactions1 = [100, -17, -23, -9]
//     // Expected output: [100, 83, 60, 51]

    const accountTransactions2 = [250, -89, 100, -96]
//     // Expected output: [250, 161, 261, 165]

    const accountTransactions3 = []
//     // Expected output: []
    expect(cummulativeSum(accountTransactions1)).toEqual([100, -17, -23, -9])
    expect(cummulativeSum(accountTransactions2)).toEqual([250, -89, 100, -96])
    expect(cummulativeSum(accountTransactions3)).toEqual([])
  })
})
// Failed successfully: ReferenceError: cummulativeSum is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: cummulativeSum
// input: an array
// output: returns an array of the accumulating sum
// process: 
// - first I'll create the function and call it cummulativeSum, then I'll put array as a parameter
// - since the return is another array of the same lenght ill be using .map() and ill be putting inside of the map function the array parameter and also the index so I can access the indexes of the array and add them 
const cummulativeSum = (array) => {
  return array.map((array, index) => array[index - 0] + array[index]
)
}
console.log(cummulativeSum(accountTransactions1))

// I dont understand how to make it work using the map notation, the process should be similar to the fibonacci sequence but in the fibonacci sequence I knew which ones were the first two values and I was able to create the rest of the array based on that but I dont know how to do it without that and I dont really understand how to make it work in the map notation part 




