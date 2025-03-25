// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

let array = [1, 2, 3, 4, 5];

function productResult(array) {
    let newArray = []
    for (i = 0; i < array.length; i++) {
        let product = 1;
        for (j = 0; j < array.length; j++) {
            if ( i != j) {
                product *=array[j];
            }
        }
        newArray.push(product)
    }
    return newArray
}

console.log(productResult(array))

// Optimized O(n) solution 
// function productResult(array) {
//     let n = array.length;
//     let result = new Array(n).fill(1); // O(n)

//     // Step 1: Compute prefix products
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {  // O(n)
//         result[i] = prefix;
//         prefix *= array[i];
//     }

//     // Step 2: Compute suffix products
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {  // O(n)
//         result[i] *= suffix;
//         suffix *= array[i];
//     }

//     return result;
// }