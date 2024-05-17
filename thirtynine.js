// this and call function

// window me this = window ;
// node = {}

function SetUserName (username){
    this.username = username;
}

function createUser(username,email,password){
    SetUserName.call(this,username); // ye call hi nahi rha h 
    // call karne ke liye  call karde likhna padega
    // call toh  ho rha but uppdate nahi horha toh this pass karte h
    this.email = email
    this.password = password
}

const chai  = new createUser("chau","facebook@gmail.com","123")
console.log(chai) 