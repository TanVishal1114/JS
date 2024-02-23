// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const jsUser={
    name:"Tanvi",
    "last Name":"Mehta",
    [mySym]:"myKey1",
    age:22,
    location:"Gujarat",
    email:"tanvi@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Tuesday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["last Name"])
//console.log(jsUser."last Name") we can't used like this
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])
//Object.freeze(jsUser);
jsUser.email="tm@gmail.com";
//console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());
