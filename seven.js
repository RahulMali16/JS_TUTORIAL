// for interviews
// primitive value or non-primiitve data type

// primitive 
//stirng call by value , number, boolean , null , undefined, symbol ,BigInt(last me n laga do symbol ke)

// javascript is a dynamic language saari chize dynnamiccally work kar karti h


//non-primitive or reference type;
// array , object, Functions 
const id = Symbol("23");
const name = Symbol("23");


console.log(id == name); // they are not same


//  null ka datatype jo h wo object h function ka object function aata h
// string = string
// null = object
// undefined = undefined
//symbol = symbol

const heros = ["shaktiman", "naagraj","doga"];

let myobj = {
    name : "hitesh",
    age: "20",
}

console.log(typeof undefined);

const myfunction = function(){
    console.log("hello world");
}

myfunction();