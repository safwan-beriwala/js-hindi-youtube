// FOR EACH LOOP WITH ARRAY

const language=["js","c++","java","python"]

// language.forEach(function (item){
// console.log(item)
// })
// CALL BACK Function
// language.forEach((val)=>{
// console.log(val)
// })
//ARAAY K ANDAR OBJECT,OBJECT,OBJECT

const mycoding=[
{
    languageName:"javascript",
    languagefile:".js"
}  ,
{
    languageName:"java",
    languagefile:".java"
},
{
    languageName:"python",
    languagefile:".py"
}
]
mycoding.forEach((item)=>{
console.log(item.languageName)
console.log(item.languagefile)
})
