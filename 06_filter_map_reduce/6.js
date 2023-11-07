const mynms=[1,2,3,4,5,6,7,8,9,10]

// const newNums=mynms.filter((num)=>num >5)
// console.log(newNums)

//with scope
// const newNnums=mynms.filter((num)=>{
//     return num>4
    
// })
// console.log(newNnums)

//USING OR EACH
const newNums=[]

// mynms.forEach((num)=>{
//     if(num >3){
//         newNums.push(num)
//     }
   
// })
// console.log(newNums)

//REAL WORLD EXAMPLE

const books=[
    {
        title:"BOOK ONE",genre:"FICTION",publish:1981,
        edition:2004
    },
    {
        title:"BOOK TWO",genre:"NON-ICTION",publish:1992,
        edition:2008
    },
    {
        title:"BOOK THREE",genre:"HISTORY",publish:1999,
        edition:2007
    },
    {
        title:"BOOK FOUR",genre:"NON-ICTION",publish:1989,
        edition:2010
    },
    {
        title:"BOOK FIVE",genre:"SCIENCE",publish:2009,
        edition:2014
    },
    {
        title:"BOOK SIX",genre:"FICTION",publish:1987,
        edition:2010
    },
    {
        title:"BOOK SEVEN",genre:"HISTORY",publish:1986,
        edition:1999
    },
    {
        title:"BOOK EIGHT",genre:"SCIENCE",publish:1981,
        edition:2004
    }
]

let newBooks=books.filter((bk)=>bk.edition===2004)
newBooks=books.filter((bk)=>{return bk.publish >=2000})
newBooks=books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre ==="HISTORY"
})
console.log(newBooks)


// books.forEach((bk)=>{
//     console.log(bk)
// }) printing values with for each