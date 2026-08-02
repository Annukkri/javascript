const mySym = Symbol("key1")



const JsUser = {
    name : "Annu",
    fullName :"Annu Kumari",
    age : 19,
    [mySym] : "mykey1",
    location : "Bihar",
    email : "annu22@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays : ["Monday","Tuesday","Thursday"]
}



console.log(JsUser.email);
console.log(JsUser.lastLoggedinDays);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);

JsUser.email = "Annu@chatgpt.com"
console.log(JsUser.email);
console.log(JsUser);
Object.freeze(JsUser)
JsUser.email = "Annu@microsoft.com"
console.log(JsUser.email);
console.log(JsUser);





