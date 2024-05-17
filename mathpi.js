const mynewobj = {username: "username"}

const desc = Object.getOwnPropertyDescriptor(Math,"PI")
Math.PI = 5
console.log(Math.PI);
console.log(desc);

//is tarah ki property hoti h
const chai = {
    name:'ginger chai',
    price: '240',

}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,object] of chai) {
    console.log(`${key} ${object}`);
    
}
