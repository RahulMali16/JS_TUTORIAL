// loops//

["","",""]

[{},{},{}];

const arr = [1,2,3,4,5,6,7,8,9];

// for (const iterator of object) {
    
// }
//forof loop jo h ye values dedeta h but jo forin loop h wo key hi deta h array ka
for(const i of arr) {
    console.log(i);
    
}
console.log("++++++++++++++++++++++");

const greeetings = "hello world";

for (const greet of greeetings) {
    console.log(greet);
}

//maps
// order ko yaad rakhta h but object nai rakhta/ uniques hogi do dala toh ek hi dikhaega
const map = new Map();
map.set('IN','INDIA');
map.set('INi','INDIA in');
map.set('INii','INDIA in ni');
map.set('IN','INDIA');


console.log(map)
for (const key of map) {
    console.log(key);
    
}
// for of// loop h????
for (const [key,value] of map) {
    console.log(key, ":", value);
    
}


const myobj = { 
    js : "javascript",
    cpp : "c++",
    rb: "ruby"
}
// forin
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const arr1 = [1,2,3,4,5,66];
for (const key in arr1) {
  console.log(key) //yaha keys aatio h 0,1,2,3,4,5
  console.log(arr[key]) //yaha keys aatio h 0,1,2,3,4,5

}