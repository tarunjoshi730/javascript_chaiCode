
// datatypes same where the 2 things are compare typescript isnt hold this 

console.log(2>1);                       // true
console.log(2>=1);                       // true
console.log(2<1);                       // false
console.log(2<=1);                       // false
console.log(2 == 1);                       // false
console.log(2 !== 1);                       // true

// lets we see surprise if we see the string and number comparisons
console.log( "3" > 1 );                       // true
console.log( "2" > 1 );                       // true
console.log( "1" > 2 );                       // false


/* comparsion code always avoid clean code this is the reason  start */

console.log( null >= 0 );                       // true
console.log( null <= 0 );                       // true
console.log( null == 0  );                       // false  value conversion is come 

/*                   Important Points 

Equality Check == and comparisons > <>=<= work differently.
Comparisons convert null to a Number, treating it as 0. Thats why (3) null >=0 is true and (1) null > 0 is false.

*/


// undefined always give false results
console.log(undefined == 0);                       // false
console.log(undefined <= 0);                       // false
console.log(undefined < 0);                       // false
console.log(undefined >= 0);                       // false

/* comparsion code always avoid clean code this is the reason  end */


// strictly check ( data value also check and value also ( === ) )

console.log("2" === 2);                       // false
console.log(2 === 2);                       // true