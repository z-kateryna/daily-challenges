// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const numbers = [1, 2, 3, 4, 5, 6, 7];
const k = 50;

function addNumbersAndK(numbers, k) {
  for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === k) {
        return true;
      }
    }
    return false;
  }
}

console.log(addNumbersAndK(numbers, k));


//Leetcode

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello, World!"  
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */