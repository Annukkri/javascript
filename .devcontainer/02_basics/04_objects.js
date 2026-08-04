// const tinderUser = {
//     id : "123abc",
//     name : "Sammy",
//     isLoggedIn : false
// }
// // console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Annu",
//             lastname : "Kumari",
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1 : "a" , 2 : "b"}
// const obj2 = {3 : "a" , 4 : "b"}
// // const obj3 = {obj1 , obj2}
// // console.log(obj3);
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor: "hitesh"
}
//const{courseInstructor} = course
const{courseInstructor : Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);