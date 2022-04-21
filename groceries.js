console.log("groceries script loaded")

//give you a shoping list
//prcess the shopping list and calculate my total

let groceries = [
    {"price": 4, "item": "milk"}, //0
    {"price": 7, "item": "pork"}, // 1
    {"price": 2, "item": "candy"},//2
    {"price": 18, "item": "dog food"}//3
]
let total = 0
//4 + 7 + 2 + 18
// total = total + groceries[0].price
// total = total + groceries[1].price
// total = total + groceries[2].price
// total = total + groceries[3].price

//if repitive use for-loop
for(let index = 0; index < groceries.length; index++){
    console.log("index", index, "grocery", groceries[index])
    total = total + groceries[index].price
}