// 1. Create an array of 5 fruits and print the first fruit 

// let fruits = ["Apple", "Banana", "Guava", "Litchi", "Mango"]
// console.log(fruits[0]);

// 2. Print the last element of an array

// let myArray = [2 , 4, 6 , "Annu", 8]
// console.log(myArray[myArray.length - 1]);

// 3. Find the length of an array

// let fruits = ["Apple", "Banana", "Guava", "Litchi", "Mango"]
// console.log(fruits.length);

// 4. Create a function that takes an array and return its first element

// function getfirst(arr){
//     return arr[0];
// }
// let myArray = [2 , 4, 6 , "Annu", 8]
// console.log(getfirst(myArray));

// 5. Create a function that takes an array and return its length

// function getlength(arr){
//     return arr.length;
// }
// let fruits = ["Apple", "Banana", "Guava", "Litchi", "Mango"]
// console.log(getlength(fruits));

// 6. Create a function that takes an array of numbers and returns the largest number

function largest(arr){
    return Math.max(... arr);
}
let largestNo = [20, 40, 50, 89, 23]
console.log(largest(largestNo));

