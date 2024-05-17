// nums and maths

const score = 400
const balance = new Number(200);
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);


console.log(balance.toFixed(2));

const otherNumber =  23.999994;

console.log(otherNumber.toPrecision(4));
//precision to 4 signigficant figures tk e dega mtlb precise + 4 digit hogi

const hundreds =200000000000;
console.log(hundreds.toLocaleString('en-IN'));
//indian notation me de dega jo bhi string h wo


//++++++++++++++++++++++++++++++++++++++maths+++++++++++

console.log(Math); // math jo h  wo ek apne aapp me obj h
console.log(Math.abs(-4)); // mode

 console.log(Math.round(4.89898));
 console.log(Math.ceil(4.2));//jara bhi bada hua bada value le lega
 console.log(Math.floor(4.545));
 //jara bhi bada hoga h=jo chota h wo lelega


 console.log(Math.floor(Math.random()*10) + 1);  //in betwweeen 0 to  1

 const min = 10;
 const max = 20;
 // formula to be noted to find random number btween min and max


console.log(Math.floor((Math.random()*(max-min + 1))) + min) 
// v. imp