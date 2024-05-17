// do string add ho  skate h
  
let name  = 90;

//bckticks


console.log(`hello my name is ${name}`);

// string ko aise bhi initialise kar skate h
const gameName = new String("hekki");

console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString =  gameName.substring(0,3);
console.log(newString.length);
console.log(newString);



const newString2 =  gameName.slice(-4,3);
console.log(newString2.length);
console.log(newString2);
//we can add -minus values also to the same;

 

let name22 =  "      rhaul   "
console.log(name22);
console.log(name22.trim());

const url = "https://hi.com/rahul%20mali";

console.log(url.replace('%20','-'));

console.log(url.includes('rahul'));

let gameName2 = "raul-mali-hello";
//split basis of dash '-'mit ll make an array;
console.log(gameName2.split('-'));










 