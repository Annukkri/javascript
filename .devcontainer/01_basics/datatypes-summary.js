// stack(primitive) , Heap(Non-Primitive)

// stack(Primitive)


let myYoutubename = "hiteshchaudhary.com"
let anothername = myYoutubename
anothername = "Chai aur code"
console.log(myYoutubename);
console.log(anothername);

// Heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);