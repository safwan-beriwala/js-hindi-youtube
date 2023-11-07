const mynumbers=[1,2,3,4,5,6,7,8,9,10]

 const total=mynumbers.reduce(function (acc,cuuval){
    console.log(`acc is: ${acc} current val : ${cuuval}`)
    return acc+cuuval
},0)
console.log(total)