// const tinderUser = new Object(); // singleton object h 
const tinderUser1 = {}

// non-singleton object

tinderUser1.id  = "123";
tinderUser1.name = "rahulmali"
tinderUser1.isLoggedIn  = false;
console.log(tinderUser1);


const regular = {
    email : "someronef@gmail.ciom",
    fullName : {
        userfullName : {
            firstName : "rahul",
            lastName : "mali"
        }
    }
}

//excess karna h agar toh isko excess kaise karenge 
console.log(regular.fullName.userfullName.firstName)
console.log(regular)

const obj = {1 : "a" , 2: "b"}
const obj1 = {3 : "c" , 4: "d"}
const obj3 = {obj,obj1};
const obj4 = Object.assign({},obj,obj1); //{} ye  paranthessis ek  syntax h
// obj - target 
// obj1 -  Source
//{} ye pehla me jaa rah hota h

// assign kar deta h source ki  value ko target me

const obj5 = {...obj1, ...obj}
console.log(obj5);
console.log(obj3);
console.log(obj4);


const user = [
    {
        id : 1,
        email : "hello@gmaim.com"
    },
    {
        id : 2,
        email : "hello2@gmaim.com"
    },
]

user[1].email = "helllllll";

console.log(user[0].email);

console.log(tinderUser1)

console.log(Object.keys(tinderUser1)) //-> ye ek  array hojati h
console.log(Object.values(tinderUser1))//ye value dedega
console.log(Object.entries(tinderUser1)) //->saari values jo hogi wo string me convert hojaegi


console.log(tinderUser1.hasOwnProperty('isLoggedIn')) 