// stack memory h  (primiitve)
// and uske baad h heap memory (NON PRIMITIVE)

let myName =  "helloworld";
let noName = myName;
noName  = "hellodunya"

console.log(myName);
// ek copy hogi value pass by refernce nahi hoga

console.log(noName);


let user = {
    email: "user@gmail.com",
    upi: "2222"
}

let user2 = user ;
user2.email  = "hello@gmail.com"

console.log(user.email);
console.log(user2.email);

