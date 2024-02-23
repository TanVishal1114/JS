// Array
const myArray=[1,2,3,4,5]
const myHeros=['abc','def']
const myArr=new Array(6,7,8,9,10);
myArr.push(11);
myArr.pop();
myArr.unshift(20);
myArr.shift();
console.log(myArr.join());
console.log(typeof myArr.join());
 console.log(myArr);
// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));
//console.log(myArray.concat(myHeros));

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);