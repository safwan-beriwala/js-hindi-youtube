//NOTE:IN FUNCION THIS WILL NOT WORK IT WILL WORK ONLY IN OBJECT
// function chai(){
//     let username="vasik"
//     console.log(this.username)   //it will print undeined
// }
// chai()



// const user={
//     username:"safwan",
//     pass:123123,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`)
//         console.log(user)
//     }
    
// }
// user.welcomeMessage()
// user.username="zaid"
// user.welcomeMessage()
// console.log(this)

//ARROW FUNCTION

const addnum=(num1,num2)=>{
    return num1+num2
}
console.log(addnum(10,10))

//IMPLICIT RETURN MAINLY USE IN REACT
const addnumM=(num1,num2)=> (num1+num2)

console.log("implicit return",addnumM(100,10))

//  (()=>{
//         console.log("CEEG4EGEG");
// })()

(function chai(){
    console.log(`erervr`)
})()