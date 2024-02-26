// Immediately Invoked Function Expressions (IIFE)

(function chai(){
console.log("db Connection");
})();

((name)=>{
    console.log(`db Connection two ${name}`);
})('tanvi')