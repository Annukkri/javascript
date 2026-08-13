const temperature = 41

if(temperature == 41 ){
    console.log("less than 50");
} else{
console.log("temperature is greater than 50");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User loggrd in");
}