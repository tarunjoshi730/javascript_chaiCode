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
console.log(myFunction);


// Find easily to find a Datatype of any 

console.log(typeof hero_Object)
console.log(typeof heroString);    
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);

console.log(typeof Object);


//  All Data Types Learn Easily if we see website
// https://262.ecma-international.org/5.1/#sec-11.4.3


// *************         Memory Usage ********** and Types ***************************/


// Stack ( Primitive ), Heap ( Non-Primitive)

//      stack memory use variable is declared we gain a copy 
//      but in Heap memory use the heap variable is declared we gain a Original Value in change .


// lets see example


let myYoutubename="Tarunjoshidotcom" // primitive type

let anothername="myyoutubename"
anothername="new_name_is_come"

console.log(myYoutubename)
console.log(anothername)

// lets go in advance

let user ={
    email:"tarunjoc.com",
    upi: "12had.com",

}

let user2 ={
    email:"harshjoc.com",
    upi:"097harsh.com",
}

let user3 = user2

user3.email = "new_email_create.com"

console.log(user);
console.log(user2);
console.log(user3); 

// so we use the original value is changed in heap  