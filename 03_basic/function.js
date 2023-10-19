// function addTwoNumbers(n1,n2){
// let result=n1+n2
// return result
// }
// const result=addTwoNumbers(10,20)
// console.log("RESULT IS:",result)

//PARAMETER KAISE LIYE JATY HAI
function userLoginIn(username){
    return `${username} just logged in`
}
console.log(userLoginIn("SAFWAN"))

const user={
    name:"sawan  beriwala",
    password:123123
}
function check (passobj){
    return `User name is ${passobj.name} and password is ${passobj.password}`
}

console.log(check(user))

const array=[100,200,300,400,500]

function arr(getarr){
    return getarr[2]
}
console.log(arr(array))