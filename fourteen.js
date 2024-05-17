//singleton - consturctor s banate h 
// object.create  

//agar mujhe symbol ko object banake print karna h
const sym = Symbol("hello1");

const jsuser = {
    "name": "rahul", // ye jo h name wo ek string hoti h
    [sym]: "hdisje",
    age : 10,
    location : "indore",
    email:"rahul.mali@gmail.com",
    islog: false,
    
    last: ["monday","tuesday"]

   //name jo h wo string hota h 

}


console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[sym]); // is not square breaket then its a string if used square bracket thenn its a undefined type

console.log(typeof jsuser.sym);

// is not square breaket then its a string if used square bracket thenn its a undefined type

// ye apne aap me ek string h'


jsuser.email = "rhfjfhjfhkf"; // if you want to change 
console.log(jsuser.email);

//but if you don't want to change then 
// Object.freeze(jsuser); 
//it will freeze the above
jsuser.email = "hekljddodj"; // if you want to change 
console.log(jsuser.email);
console.log(jsuser);


jsuser.greetings = function(){
    console.log("hello js users");
}
jsuser.greetingsTwo = function(){
    console.log(`hello js user ${this.last}`);
}

console.log(jsuser.greetings);
console.log(jsuser.greetings());

console.log(jsuser.greetingsTwo);
console.log(jsuser.greetingsTwo());
//undefined isliye kyoki ek execution browser apne aap karta h ya compiler