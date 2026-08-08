// 1. Check whether a character is uppercase or lowercase

let character = "z"
if(character === character.toUpperCase()){
    console.log("Uppercase");
}
else{
    console.log("Lowercase");
}

// 2. Smallest of three numbers

let a = 20;
let  b = 10;
let c = 30;
if(a < b && a < c){
    console.log(a + " is the smallest");
}
else if(b < a && b < c){
    console.log(b + " is the smallest");
}
else{
    console.log(c + " is the smallest");
}


// 3. Check whether a number is 3-digit or not


let num = 467
if(num >= 100 && num <= 999){
    console.log("It is a 3-digit number");
}
else{
    console.log("It is not a 3-digit number");
}


// 4. Calculate the Square and cube of a number

let num = 4;
let square = num * num;
let cube = num * num * num ;
console.log("Square :  " , square);
console.log("Cube : " , cube);

// 5. Multiplication Table

let num = 4;
for(let i = 1;i <= 10;i++){
    console.log(num + "x" + i + "=" + (num + i));
}

// 6. Sum of 10 Natural number

sum = 0;
for( let i = 1;i <= 10; i++){
    sum = sum + i
}
console.log("Total Sum : " , sum)

// 7. Sum of all even number from 1 to 100

let sum = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        sum = sum + i
    }
}
console.log("Sum of even numner = ", sum);

// 8. Print Odd number from 1 to 50

for(let i = 1; i <= 50 ; i++){
    if(i % 2!== 0 ){
        console.log(i)
    }
}

//  9, Print Even number from 1 to 50

for(let i = 1; i <= 50 ; i++){
    if(i % 2 == 0 ){
        console.log(i)
    }
}