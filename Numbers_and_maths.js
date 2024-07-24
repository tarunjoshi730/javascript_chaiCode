const score = 400
const balance=new Number(100)
console.log(score);
console.log(balance);
console.log(balance.toString().length);     // SHOW THE CHARACTERS
console.log(balance.toString());
console.log(balance.toFixed(2)); // price value take when we do on project 

const otherNumber= 223.77899
console.log(otherNumber.toPrecision(4));   // 223.8
console.log(otherNumber.toPrecision(3));   // 224
// we use the precision value with carefully 
console.log(otherNumber.toPrecision(2));    // 2.2e+2
// its show 3 value but other value show like that 

//  lets see some comma value in 
const hundreds = 100000000
console.log(hundreds.toLocaleString());     // us indian system commas seprated
console.log(hundreds.toLocaleString('en-IN')); //

//                      MATH Start
// console.log(Number.toMAX_VALUE());
console.log(Math);  // object math

console.log(Math.abs(-4));   // negative into positive
console.log(Math.abs(4));

console.log(Math.round(4.6));  //5

console.log(Math.ceil(4.2));  //5
console.log(Math.ceil(4.9));  //5

console.log(Math.min(2,3,0.2,9,-1));   -//  1
console.log(Math.max(7,6,6.5,3,2,9.5,3,9));     //9.5

console.log(Math.random());     // 0 to 9 inside
console.log(Math.random()*10);
console.log(Math.floor(Math.random()* 1 ) +1);

// short with min max write
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))) 

console.log(Math.floor(Math.random() * (max - min +1))  + min) //  0 case avoid b/c of 1 and take minimum value so we use st last min 

