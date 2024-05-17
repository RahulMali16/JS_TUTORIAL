//this keyword

const user = { 
    username: "hitesh",
    price : 99,
    welcomemessage: function(){
        //ye toh current context ke liye use hota h 

        console.log(`${this.username} , is the username`)
        console.log(this);
    }
    
}


user.username = "sam";
user.welcomemessage()
console.log(user.welcomemessage());

//

console.log(this);
// browser ke liye global object jo h wo h window object

//isko agar browser me run karenge toh ye window dikhaega


function chai(){
    let username ="hitesh"
    //ye undefined ata h
    console.log(`${username}`)
    console.log(this.username); // ye function me use nahi kar sakte 
    console.log(this); // ye bahot saari values print kar dega

}

//function me global chize aati h bahot sari //arrow function me apan use kar sakte h this keyword

chai();

//aroow function
const user2 = ()=>{
    console.log(this.username); // ye function me use nahi kar sakte 
    console.log(this);  
}


user2();


//arrow function


const addtwo = (num1,num2) =>{
      return num1+num2;
}

console.log(addtwo(4,5));


// implecit return ki baat kare apan then 

// isi function ko aise bhi likh sakte h /

const addtwo1 = (num1,num2) => num1+num2
const addtwo3 = (num1,num2) =>( {username: "hitesh"})



// {} ye likha tha toh return likkhna padega

console.log(addtwo1(3,4))
console.log(addtwo3(3,4))

