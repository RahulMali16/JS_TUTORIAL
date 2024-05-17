class User{
    constructor(email,pass){
        this.email = email,
        this.pass = pass
    }

    get email(){
        return this.pass.toUppercase()
    }

    set email(value){
        this.pass = value.toUppercase()
    }
}


const hitesh = new User("hitesh@ai","123")
console.log(hitesh.pass)