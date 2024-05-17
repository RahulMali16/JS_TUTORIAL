//global scope / global variable
let a = 10;
const b =30
var c = 40


if(true){
    // block scope / block variable
    //if var aagya to ye update kardega value ko isliye var use nahi akrte h
    c = 50; //ye update ho jaega
    let a = 20;
const b =40;
//var value jo h wo ek bug h//
console.log("INNner",a);
console.log("INNner",b);
console.log("INNner",c);
//ye inner scope tk hi defined h


// let and const jo h wo sirf andar tk valid h 
}

console.log(a);
console.log(b);
console.log(c);
