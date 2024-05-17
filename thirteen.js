const myArr = [1,2,3,4,5];

const heroes  = ["thor", " Ironman",  "spiderman"];
const dc = ["superman", "flash", "batman"];

// heroes.push(dc);
console.log(heroes);

// // it will not merge // as a single  elem
// console.log(heroes[3][1]);

// agar merge karna h then concat use karte h toh naya array banate h and usse concat kerte h


const all = heroes.concat(dc);

console.log(all);

//  isis ka ek aur  h spread

const allheroes = [...heroes,...dc]; // spread method

console.log(allheroes);


const twoarr = [1,2,3,[1,2,3],4,5,[1,2,[2,3,[3,4]]]];

const newArrr = twoarr.flat(Infinity);
console.log(newArrr);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));


console.log(Array.from({name: "hitesh"})); // it ll return an empty string as it ill not converted
// abhi hoga ye ki ye convert karega jab specify akrenge 

// it will form the arrray of the entry is given
let score = 100
let score1 = 200;

console.log(Array.of(score,score1));