//              Conversion_operation  JS

let score = 33
 console.log(score);                                   //33

 // Lets see the datatype 
 console.log(typeof score);                           // number  

 // we also write the datatype
 console.log(typeof (score));                        // number  

// lets do some testing  if we have a number with alphabetic characters so what its give 
let score1 ="43abc"
console.log(score1);                              // 43abc
console.log(typeof score1);                       //  string  
console.log(typeof (score1));                    // string  

let valueInNumber = Number(score);
console.log(valueInNumber);                     // 33

let valueInNumber1 =Number(score1);
console.log(valueInNumber1);                   // NaN -> Not a Number

// lets check the value if its Null 
let score2 = null; 
console.log(score2);                          // null -> zero is  a Number

let valueInNumber2 =Number(score2);
console.log(valueInNumber2);                  //   0

// lets check also that if the value is Undefined
let score3 = undefined; 
console.log(score3);                         // Undefined -> Not a Number

let valueInNumber3 =Number(score3);
console.log(valueInNumber3);                // NaN -> Not a Number

// lets check in boolean mode
let score4=true;  
console.log(score4);                          // true
console.log(typeof score4);                  // boolean

let valueInBoolean4 =Boolean(score4);
console.log(valueInBoolean4);               // true

let score5=true;
let valueInNumber4 =Number(score5);
console.log(typeof valueInNumber);          // number
console.log(score5);                        //  true  
console.log(valueInNumber4);                //     1


// lets check in String mode

let F_name="tarun"
console.log(F_name);                        // tarun

let valueInString = String(F_name);
console.log(valueInString);                 // tarun 
console.log(typeof valueInString);          // string


// Overall Basic Conversion

/*

" 33 " => 33
" 33abc " => NaN
"true " => 1;    false => 0 

*/


// Advanced Conversion

let isLoggedIn =1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     // true

let isLoggedInn = 0

let booleanIsLoggedInn = Boolean(isLoggedInn)
console.log(booleanIsLoggedInn); //false

let isLoggedInnEmpty = ""

let booleanIsLoggedInnEmpty = Boolean(isLoggedInnEmpty)
console.log(booleanIsLoggedInnEmpty); // false


let isLoggedInnNotEmpty = "tarun"

let booleanIsLoggedInnNotEmpty = Boolean(isLoggedInnNotEmpty)
console.log(booleanIsLoggedInnNotEmpty); // true

/*
                                                Boolean with logged 

1 => true;  
0 => false
" "  => false
"tarun" => true;
*/

let someNumber = 12

let stringNumber = String(someNumber)   // not write string as small first letter is capital 
console.log(stringNumber);              // 12
console.log(someNumber);                //12
console.log(typeof stringNumber);      // string
console.log(typeof someNumber);        // number

/* ---         Operations           ---  */

let value = 3
let negValue =-value
console.log(negValue);                  // -3

let value1 = -2
let negValue1 = -value1
console.log(negValue1);                // 2

let value2 = ""
let negValue2 = -value2
console.log(negValue2);                // -0

console.log(negValue+3);               // -3 =3 = 0
console.log(3**4);                     // 3 power 4 = 81(3*3*3*3)

//        string add 2 
 
let str1 = "hello"
let str2 = " tarun"

str3 = str1 + str2
console.log(str3);                      // hello tarun

str4 = str1 - str2 
console.log(str4)                       // NaN
console.log("1" + 2)                    // 12
console.log(1 + "2")                    // 12
console.log("1" + 2 + 2)                // 122
console.log(1 + 2 + "3")                // 33
console.log(1 + 2 + 3 )                 // 6

console.log(true)                       // true
console.log(+true)                      // 1
console.log(+false)                     // 0
console.log(-true)                      // -1
console.log(-false)                     // -0
console.log(+" ")                       //  0               

/*  dont try this Start*/
let num1,num2, num3 
num1 =num2 =num3 = 2+2
console.log(num1)                         // 4
/*  dont try this End */

//   prefix and postfix Concept
let gameCounter =100
++gameCounter
console.log(gameCounter)            // 101
gameCounter++
console.log(gameCounter)            // 102