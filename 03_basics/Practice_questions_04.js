// 1. Create a function to add two numbers

function add(num1 , num2){
    return num1 + num2;
}
console.log(add(4,5));

// 2. Create a function to subtract two numbers

function subtract(num1 , num2){
    return num1 - num2;
}
console.log(subtract(5,4));

// // 3. Create a function to find the square of two numbers

function square(num){
    return num * num;
}
console.log(square(4));

// 4. Create a function to find the cube of a number

function cube(num){
    return num * num * num;
}
console.log(cube(5));

// // 5. Create a function whether a number is even or odd

function isEvenorOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
       return "Odd"; 
    }

}
console.log(isEvenorOdd(5));
// 6. Create a function to find the largest of two numbers

function largest(num1,num2){
   if(num1 > num2){
    return num1;
   }
   else{
    return num2; 
   }
}
console.log(largest(6,4));

//  7. Create a function to calculate the Area of a circle

function calculatearea(radius){
   return Math.PI * radius * radius; 
}
console.log(calculatearea(4));

// 8. Create a function to convert celsius to fahrenheit

function celsiustoFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(celsiustoFahrenheit(90));

// 9. Create a function to calculate the percentage of five subjects

function Percentage(sub1, sub2, sub3, sub4,sub5){
    return ((sub1 + sub2 + sub3 + sub4 + sub5)/500) * 100;
}
console.log(Percentage(90,96,96,98,87));

// 10. Print welcome Annu

function name(){
    console.log("Welcome,Annu");
}
name()