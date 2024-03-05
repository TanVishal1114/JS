const myNums=[1,2,3,4]
// const myTotal=myNums.reduce(function(accu,curVal){
//     console.log(`acc: ${accu} and curVal:${curVal} `);
//     return accu+curVal
// },3)
// const myTotal=myNums.reduce((accu,curVal)=>accu+curVal,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
// const priceToPay=shoppingCart.reduce((accu,item) => item.price + accu,0)
const priceToPay=shoppingCart.reduce(function(accu,item) {return item.price + accu},0)
console.log(priceToPay);