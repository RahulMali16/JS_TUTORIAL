//ES6 ke baad ki kahani h
/* 
class User{
       constructor(userName , pass, email){
        this.userName = userName
        this.email = email
        this.pass = pass

       }

       encrytpassword(){
        return `${this.pass}abcd`
       }


}

*/

const new2 = new User("rahul","rahul123","rahul.mali1603");

new2.encrytpassword();
console.log(new2.encrytpassword());


//  behind the scene 
 
function User(userName , pass, email){
    this.userName = userName
    this.email = email
    this.pass = pass
}

User.prototype.encrytpassword(){
    return `${this.pass}abcd`;
}

const tea = new User("rahul","rahul123","rahul.mali1603");

tea.encrytpassword();
console.log(tea.encrytpassword());

