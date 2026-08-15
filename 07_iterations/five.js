const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val){
    console.log(val);
})

// using arrow function

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

