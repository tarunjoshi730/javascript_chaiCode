
let MyDate = new Date();
console.log(typeof MyDate)     // Object
console.log(MyDate)     // 2024-07-23T08:50:21.368Z
console.log(MyDate.toString())  // Tue Jul 23 2024 14:20:21 GMT+0530 (India Standard Time)
console.log(MyDate.toDateString())  // Tue Jul 23 2024
console.log(MyDate.toISOString())   // 2024-07-23T08:50:21.368Z
console.log(MyDate.toJSON())    // 2024-07-23T08:50:21.368Z

console.log(MyDate.toLocaleDateString()) // 23/7/2024
console.log(MyDate.toLocaleString())    // 23/7/2024, 2:22:44 pm

let myCreatedDate = new Date(2024,0,22)
console.log(myCreatedDate.toDateString())   // Mon Jan 22 2024
console.log(myCreatedDate.getFullYear()) // 2024
console.log(myCreatedDate.toLocaleString()); // 22/1/2024, 12:00:00 am
 
let myCreatedDate2 = new Date("2024-01-04")    // yy mm dd format
console.log(myCreatedDate2.toLocaleString())    // 4/1/2024, 5:30:00 am

let myCreatedDate3 = new Date( )    // mm dd yyy format
console.log(myCreatedDate3.toLocaleString())    // 4/1/2024, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);     //  1721727075838
console.log(myCreatedDate3.getTime());  //  1705170600000

console.log(Math.floor(Date.now()/ 1000))     // 1721730272


let newDate = new Date()
console.log(newDate);   // 2024-07-24T06:29:02.624Z
console.log(newDate.getMonth()) // 6
console.log(newDate.getDay())   // 3

console.log(`${newDate.getDay()}`)  // wednesday 

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    getMonth:"short",
}))

console.log(newDate)
