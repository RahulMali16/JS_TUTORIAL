class User{
    constructor(username){
        this.username = username 

    }

    logMe(){
        console.log(`this is the username ${this.username}`)
    }
    // static matlb ye user ko use nahi karne nahi deti 
    
     static createId(){
        return ' 123';

    }

}

const his = new User("rhaul")
console.log(his.createId());