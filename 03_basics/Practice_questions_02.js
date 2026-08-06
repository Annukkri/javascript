// 1. Leap Year or not

let Year = 2026
if((Year % 4 == 0 && Year % 100 !== 0) || (Year % 400 == 0)){
    console.log(Year + "is a Leap Year");
}
else{
    console.log(Year + "is not  a Leap Year");
}

// 2. Voting Eligibility

let age = 19
if(age >=18){
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible to Vote");
}

// 3. Divisible by 5 and 11

num = 55;
if(num % 5 == 0 && num % 11 == 0){
    console.log(num  +  "is divisible by 5 and 11");
}
else{
  console.log(num  +  "is not divisible by 5 and 11");  
}

// check whether a character is vowel or consonant

let ch = "e";
if(
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"  
)
{
    console.log(ch + "is a vowel");
}
else{
   console.log(ch + "is not a vowel");
} 

// 5. Greatest of four numbers
let a = 25
let b = 40
let c = 35
let d = 50
if(a > b && a > c && a > d){
    console.log( a + "is Greatest");
}
else if(b > a && b > c && b > d){
    console.log( b + "is Greatest");
}
else if(c > a && c > b && c > d){
 console.log( c + "is Greatest");
}   
else{
  console.log( d + "is Greatest");  
}

// 6. Absolute Value 
let num = -4
console.log(Math.abs(num));

// 7. Check Whether a year is century year or not
let Year = 3000
if(Year % 100 == 0){
    console.log(Year + "is a Century Year");
}
else{
    console.log(Year + "is a Century Year");
}

// 8. Check Whether a number is multiple of 10
let num = 50
if(num % 10 == 0){
    console.log(num + "is a multiple of 10");
}
else{
   console.log(num + "is not  a multiple of 10");
} 

// 9. Print Pass if marks >= 40 otherwise "fail"
let marks = 90
if(marks >= 40){
    console.log("Pass");
}
else{
   console.log("Fail"); 
}