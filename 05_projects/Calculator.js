
// Calculator App


let num1 = 20;
let num2 = 10;
let operator = "+"; // Change to +, -, *, /, %

console.log("First Number :", num1);
console.log("Second Number:", num2);
console.log("Operator     :", operator);

if (operator === "+") {
    console.log("Result = " + (num1 + num2));
}
else if (operator === "-") {
    console.log("Result = " + (num1 - num2));
}
else if (operator === "*") {
    console.log("Result = " + (num1 * num2));
}
else if (operator === "/") {
    if (num2 !== 0) {
        console.log("Result = " + (num1 / num2));
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
}
else if (operator === "%") {
    console.log("Result = " + (num1 % num2));
}
else {
    console.log("Invalid Operator!");
}