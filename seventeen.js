//function

function say (){
    console.log("g");
    console.log("g");

    console.log("g");
    console.log("g");

    console.log("g");
    console.log("g");
    console.log("g");
    console.log("g");
    console.log("g");
    console.log("g");
    console.log("g");

}

// say();
// num1 and num2 are parameters/
function add(num1,num2){
    console.log(num1 + num2);

}

function add1(num1,num2){
    return (num1 + num2);

}
say// ye reference value dedega // yapjhir ye chalega hi nahi
 
// const result = add(2,3); 

//ye void function type h

const result = add1(2,3); 


console.log(result);



function loginmessage(userName){
    if(userName===undefined){

    }
    return `${userName} just logged in`;
}

const one = loginmessage("hitesh");
console.log(one)

//if username pe kuch nai dia then wo undefined deta h