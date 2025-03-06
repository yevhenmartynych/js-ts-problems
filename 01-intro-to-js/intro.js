'use strict'

// PROBLEM 1

// Using the prompt() function, write a script that sequentially asks the user for 1.login, 2.email, 3.password.
// And displays a message with the entered data with alert(). For example, "Dear User, your email is usermail@gmail.com, your password is qwerty".
// Do not use console.log in your solutions

const user = prompt('login')
const email = prompt('email')
const password = prompt('password')

alert(`Dear ${user}, your email is ${email}, your password is ${password}`)

// PROBLEM 2

// Write a line that displays your name using the alert() function.
// Do not use console.log in your solutions

alert('Yevhen')

// PROBLEM 3

// Using the confirm() function, ask the user if they are of legal age. Write the result to the isAdult variable.
// Do not use console.log in your solutions

const isAdult = confirm('Are you adult?')

// PROBLEM 4

// Create an object named dataTypes with the following 6 properties
// "String", "Number", "Boolean", "Undefined", "Null", "Big_Int".
// The value of each property must correspond to the corresponding primitive data type.
// Do not use console.log in your solutions

const dataTypes = {
  String: 'String',
  Number: 123,
  Boolean: false,
  Undefined: undefined,
  Null: null,
  Big_Int: 123n,
}

// PROBLEM 5

// Write a conditional construct that will display the appropriate greeting depending on the time of day.
// You will receive the time as an argument to the function in the time variable

// In the range of hours [23 - 5) - print the greeting "Good night"
// In the range of hours [5 - 11) - display the greeting "Good morning"
// In the range of hours [11 - 17) - display the greeting "Good afternoon"
// In the range of hours [17 - 23) - display the greeting "Good evening".

// Do not use console.log in your solutions

const greetings = (time) => {
  switch (true) {
    case time >= 5 && time < 11:
      return 'Good morning'
    case time >= 11 && time < 17:
      return 'Good afternoon'
    case time >= 17 && time < 23:
      return 'Good evening'
    default:
      return 'Good night'
  }
}

// PROBLEM 6

// The age variable is passed to the function. Depending on the value of this variable, print the corresponding message about the status of the person.

// For example: if the age is greater than or equal to 18, print "You are of legal age". If the age is less than 18, print "You are too young". Output using console.log

const validateAge = (age) => {
  console.log(`You are ${age >= 18 ? 'of legal age' : 'too young'}`)
}
