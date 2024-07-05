console.log("Tarun Joshi");

/* 2 types of software is used 
1. Node.js - Ryan Dahl 2009 - It is an open-source runtime environment for executing JavaScript code on the server-side. 
2. Deno.js - Ryan Dahl 2018 - It is a runtime for JavaScript, TypeScript, and WebAssembly that is based on the V8 JavaScript engine and the Rust programming language.
*/
const accountID = 1    // const is used to the memory allocation 

/*We have to write the name in any way it's in our Hand How to Write */

let accountEmail="Tarun@gmail.com"

var accountPassword ="1234"
accountCity="Haldwani"
let accountState;

/*accountID =2    
// const used so we cant change  
Isn't come becaus e we have an two id and its a unique thats why */
accountEmail ="harsh@gmail.com"
accountPassword ="4321"
accountCity="old"

console.log(accountEmail);
console.log(accountID);
console.log(accountPassword);
console.log(accountCity);


/*   Easily to write in less Time with Execute Together */
 console.table([accountEmail,accountID, accountCity,accountState]);



/*                                               OUTPUT



 Tarun Joshi
 harsh@gmail.com
 1
 4321
 old
 ┌─────────┬───────────────────┐
 │ (index) │ Values            │
 ├─────────┼───────────────────┤
 │ 0       │ 'harsh@gmail.com' │
 │ 1       │ 1                 │
 │ 2       │ 'old'             │
 │ 3       │ undefined         │
 └─────────┴───────────────────┘



 */