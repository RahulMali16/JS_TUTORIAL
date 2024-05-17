// Date and Time
let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// date -> object.

console.log(typeof myDate); //it will give an object


let newDate = new Date(2023,0,24,5,3);
// let newDate1 = new Date("2023-02-24");

let newDate1 = new Date("01-14-2023");
//aise bhi likh sakta h
// ye then apan ko string me lena padega


console.log(newDate.toDateString());
console.log(newDate.toLocaleString());

console.log(newDate1.toLocaleString());
console.log(newDate1.toDateString());




// 0 jo h wo jan se start hota h yaha



let myTimeStamp = Date.now(); // time stamp dega 
console.log(myTimeStamp);

console.log(newDate1.getTime());

// how to convert in miliseconds;

console.log(Math.floor(myTimeStamp/1000));




let newDate3 =  new Date();
console.log(newDate) ;

console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
     weekday: "long",
})

// ye jo date locale string h usko apne hisab se hum vallue de
// sakte h kyoki ye ek object ke jaise kaam karta h aur bhi value de kar usse edit kar sakte