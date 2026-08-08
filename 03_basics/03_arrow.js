// const user = {
//     username : "Annu",
//     price : 999,
//     welcomeMessage : function() {
//         // console.log(`${this.username} ,  welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//  console.log(this);

// function chai(){
//     let username =  "hitesh"
//     console.log(this.username);
// }
// chai()
// console.log(this);

// const chai = function(){
//      let username =  "hitesh"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username =  "hitesh"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// Arrow function

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addtwo(4,5));

// Implicit Return
// const addtwo = (num1 , num2) => num1 + num2
// console.log(addtwo(4,5));

// const addtwo = (num1 , num2) => (num1 + num2)  we can also write like this
// console.log(addtwo(4,5));


// const addtwo = (num1 , num2) => { usename : "Annu"}
// console.log(addtwo(3,4));  we will get an undefined


const addtwo = (num1 , num2) => ({ usename : "Annu"})
console.log(addtwo(3,4));





