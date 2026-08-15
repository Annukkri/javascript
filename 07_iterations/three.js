// const array = [1, 2, 3, 4, 5]

// for (const arr of array) {
//     console.log(arr);   
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     if(greetings == " ")
//         continue;
//     console.log(greet)   
// }

// Map
// keys are unique

const map = new Map()
map.set('IN','India')
map.set('USA' , 'United states of America')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-' , value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
for (const [key,value] of myObjectobject) {
    console.log(key, ':-' , value);
}
