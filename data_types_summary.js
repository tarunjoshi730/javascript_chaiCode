//      Data Acess 
// Primitive Data Types 

// 7 types : String , Number , Boolean , Null , undefined , Symbol , BigInt 

const score = 100
const scoreValue =100.3


const isLoggedIn = false  // trackk the user 
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);                    // false it isnt same value is same 

const bigNumber = 23233423131399323203231314293n        // n used for larger numbrer
const Numbers=    23233423131399323203231314293        // not seee full number 
console.log(bigNumber) 
console.log(Numbers)

console.log(score)
console.log(scoreValue)

// ( refernce type ) Non Primitive Data Types

console.log(isLoggedIn)
// Array , Objects , Functions

//              Array
const heroString = ["Shaktimsn" , " Ram " , " Devil" ];
// hero = String;
console.log(heroString);

//               Object      
 let hero_Object ={
    myname: "tarun",
    myage: 18,
 }

const myFunction = function(){
    console.log(hero_Object);
}

console.log(hero_Object);
console.log(heroString);

// Find easily to find a Datatype of any 

console.log(typeof hero_Object)
console.log(typeof heroString);    
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);

