function one(){
    const name = "hello";

    function two(){
        const website = "youtube"
        console.log(name);
        //ye excess akr sakta h
        // ye local h with respect to one
    }
    // console.log(website)
    two();
}

one();

////+++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
//isko kahi bhi declare karo ye sun  hojaega
function addone(value){
    return value+1;
} 

// console.log(addtwo(4)); +++++++++++++++++++++++
// ye iske pehle nahi likh sakte h ye documentation ka kaamaal h

const addtwo = function(num){
    return num+1;
}

console.log(addtwo(5))