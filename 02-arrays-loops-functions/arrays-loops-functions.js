'use strict'

// PROBLEM 1

// Write a function calc(a, b, op) that performs one of the arithmetic operations on numbers a and b and returns the result. The type of operation is determined by the integer op:
// 1 - subtraction,
// 2 - multiplication,
// 3 - division,
// other values - addition.
// Do not use console.log in your solutions

const calc = (a, b, op) =>
  op === 1 ? a - b : op === 2 ? a * b : op === 3 ? a / b : a + b

// console.log(calc(10, 3, 1)) // 7
// console.log(calc(10, 3, 15)) // 13

// PROBLEM 2

// Write a function createArray(start, end) that takes two parameters as input:
// the starting value
// the ending value.
// The function should return an array with a range of these values (implement it with numeric values only).
// Do not use console.log in your solutions

const createArray = (startValue, endValue) => {
  const arr = []
  for (let i = startValue; i <= endValue; i++) {
    arr.push(i)
  }
  return arr
}
// console.log(createArray(2, 9))

// PROBLEM 3

// Write a function randArray(k) that will populate an array k with random integers.
// The random numbers are generated from the range 1-500.

// Example:
// randArray(5);  // [399,310,232,379,40]

// Do not use console.log in your solutions

const randArray = (k) => {
  const arr = []
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500))
  }
  return arr
}

// console.log(randArray(5))

// PROBLEM 4

// Write a function findUnique(arr) that takes an array arr and checks the uniqueness of its elements.
// If all elements of the array are unique (have no duplicates), the function will return true;
// otherwise, it will return false.

// Do not use console.log in your solutions

const findUnique = (arr) => {
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr1.includes(arr[i])) return false
    arr1.push(arr[i])
  }
  return true
}

// PROBLEM 5

// Given two integers, a and b (a < b).
// Print all integers from a to b inclusive, such that 'a' is printed once, 'a + 1' is printed twice, and so on.

// Use console.log in your solutions

const getNumbers = (a, b) => {
  let result = []
  if (a >= b) return ''
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      result.push(i)
    }
  }
  console.log(result.join(','))
}
getNumbers(1, 3)
console.log(getNumbers(1, 3))

// PROBLEM 6

// Write a function named compact(arr) that takes an array as input and returns a new array with unique values.
// Do not use console.log in your solutions

const compact = (arr) => {
  const diff = new Set(arr)
  return Array.from(diff)
}

// PROBLEM 7

// There is an array [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"].
// Write a function that will output new arrays consisting of the data from the initial array, but with data of the same type (do not convert string to a number, even if it contains only a number).
// let arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr); /* [ [5, 12, 99, 2, 2, 4, 3], [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun” ] */
// Do not use console.log in your solutions

const funcName = (arr) => {
  const flattenedArray = arr.flat(Infinity)
  const filteredNumbers = flattenedArray.filter(
    (item) => typeof item === 'number'
  )
  const filteredStrings = flattenedArray.filter(
    (item) => typeof item === 'string'
  )

  return [filteredNumbers, filteredStrings]
}
