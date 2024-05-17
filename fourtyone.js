// inheritance

class user{
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`username is given by ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,pass){
        // this.username = username
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`this is a new course ${this.username}`)
    }

}

const chai = new Teacher("chai","new@GMAIL.COM","HELLO")
console.log(chai.addCourse());

// ye equal nahi h ye uske instance h 
// static pro