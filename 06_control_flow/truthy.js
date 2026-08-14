const UserEmail = []

if (UserEmail){
//     console.log("Got user Email");
}
else{
//    console.log("Don't have user Email");
} 


// Truthy and Falsy Values

// falsy values
// false, 0, -0 , BigInt, "", null , undefined , NaN

// Truthy values
// "0" , "false" , " " , [] , {} , function(){}


if(UserEmail.length == 0 ){
    console.log("Array is Empty");
}


const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
   console.log("Object is Empty"); 
}

// Nullish Coalescing Operator (??) : null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);
// console.log(val1);
console.log(val1);
console.log(val1);