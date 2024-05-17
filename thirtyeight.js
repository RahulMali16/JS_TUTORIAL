//fetch 
//fetch jo h ek method h response ko fetch karne ka prom the web aur network
// ye in return me promises return karta h

// fetch()
// -> onfulfield[]
//     onrejection[]



//object oreinted programming
/*
  1. prototyped-based language na ki object-oreineted h thoda syntax de diye h 
   taaki programmers are familier hojaye

   2.OOP - programming paradiem - style bol skte h


   3.object 
   - collection of properties and method.
   - toLowerCase
   

   khud se padenge  
   -abstraction - detail hide kar lena 

   -encapsulation - encapsulate kar dena jo ek rapper laga dena
   -inheritance
   -polymorphism - many swaroop ek hi bahot mehtod 


   why?use oop
   object literal
   - constructor function 
   - prototypes
   - classes
   - Instances (new,this)





*/
const user = {
    username: "hitesh",
    logincount: 8,

}
// this ->  current context
console.log(user)

//cnstructor function
// new keyword -> constructor function
 function User(userName , logincount, isloggedIn){
    this.userName = userName;
    this.logincount = logincount;
    this.isloggedIn = logincount;

    return this;

 }

//  const user1 = User("rahul",true, 2);
//  const user2 = User("aman" , true, 3);

//  console.log(user2);

// ek instance or empty create hota h 
// constructor function call hota h new ke under
 const user1 = new User("rahul",true, 2);
 const user2 = new User("aman" , true, 3);
 console.log(user2);
