const Fname="tarun"
const repoCount=20

// simple way write
console.log(Fname + repoCount + " Value ")

// modern way we write this 

console.log(`Hello my Fname is ${Fname} and my repo count is  ${repoCount}`);

const gamename =new String('joshi');
console.log(gamename[0]); // position value
console.log(gamename.__proto__); // _ _ proto _ _ two underscore used and we gain a object and object is nothing so its comes nothing
console.log(gamename.length);// see a length value 
console.log(gamename.toLocaleUpperCase());// because its a copy of that and the value is in capital letters
console.log(gamename.charAt(4)); // in which index the character is come 
console.log(gamename.indexOf('i')); // value check the index of the character


// string methods also learn within 10 min 

//                                  Substring methods 

const newString = gamename.substring(0,4); // ()  0 to 4-1 include  )           josh
console.log(newString);         // in a substring if we give a negative value so its neglect and start with zero and then start 


//                                       Slice Method
const secondString = gamename.slice(0,5); //          joshi
console.log(secondString);

const thirdString = gamename.slice(-4,4); //           osh
console.log(thirdString);

const fourthString = gamename.slice(-4,5); //          oshi 
console.log(fourthString);

//                                trim method used 

const fifthString ="        Tarun       "
console.log(fifthString.trim()); //      Tarun                      spaces deleted with trim method remove the spaces also
console.log(fifthString);       //            Tarun                spaces not deleted 

const sixthString= fifthString.trim(-5,14);
console.log(sixthString);   // remove the spaces only 

const url ="https://tarun.com/tarun%20joshi"// space replace with come %20 so we have to remove the %20

// replace 
console.log(url.replace('%20','_')); // https://tarun.com/tarun_joshi

// find to ask 
console.log(url.includes('tarun'));  // true
console.log(url.includes('helo'));  // false

// string convert to array
const  gameName2 = new String('string-into-array');
const gameName3 = new String('string into array 2');
console.log(gameName2.split('-'));
console.log(gameName3.split(' '));

// string value take in concat and endswith see

const name4String='leeter is joined';
console.log(name4String.concat(' with second'));
console.log(name4String.endsWith(' joined'));
console.log(name4String.endsWith('with'));

//  fixedto is used
function TakeAnyNumber(x){
    return Number.parseFloat(x).toFixed(8);  //  tofixed is used for after dot. number repersent 
    // parseFloat represent the number 
}

console.log(TakeAnyNumber(129868864e+6));
console.log(TakeAnyNumber(1.29868864e+6));

// output integer representation
//  129868864000000.00000000
//  1298688.00000000
// output float  representation
//  129868864000000.00000000
//  1298688.64000000

// at last we write to add like this 

const hi="number1";
const Hello="number2";
console.log(`my first ${hi} is 4 and second ${Hello} is 2 `);