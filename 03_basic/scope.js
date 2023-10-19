let a=300

if (true){
    const a=10
    let b=20
    var c=30
    console.log("inner localscope",a)
}
console.log("global scope",a)
// console.log(b)
// console.log(c)


function one(num){
    return num+1
}

function two(num){
    return num+2
}
two(10)

one(5)