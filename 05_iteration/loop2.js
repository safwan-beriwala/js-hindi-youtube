// FOR OF LOOP

// const greetings="hello world!"

// for (const greet of greetings) 
// {
//    if(greet == " ")
// continue
// console.log(`each character is ${greet}`)    
// // }
// MAPS WITH FOR OF LOOP MAPS IS KEY VALUE PAIR

const map=new Map()
map.set("inr","INDIA")
map.set("us","USA")
map.set("JP","JAPAN")
map.set("CH","CHINA")

console.log(map)

for (const [keys,VALUE] of map) {
    console.log(keys, ":-", VALUE)
}