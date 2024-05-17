//promises
// //eventual completion or failure of an async operation 
// create karna 
// promise apna ek call back leta h



//cosnsume karte h 

//create karna sikh rhe h iske baad
const promise1 = new Promise(function(resolve,reject){
    //do and async task
    //DB call 

    setTimeout(function(){
        console.log("async task completed");
        resolve();
    },1000)
})

promise1.then(function(){
    console.log("promise Consumed");

})

const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"rahull", email:"rahulmalli.com"}); //iske andar ya toh object jaega ya toh array ya function
    },1000)
})

promisetwo.then(function(user){
   console.log(user);
})

const promisethree =  new Promise(function(resolve, reject){
   setTimeout(function () {
    
       let error = false;
       if(!error){
           resolve({name: "hello" , islogged : "true"});
       }
       else{
        reject("ERROR THROWED");
       }
   },1000)
})

promisethree.then(function(user){
            console.log(user);
            return user.name
}).then((user)=>{
     console.log(user)
}).catch((error)=>{
    console.log("error catch")
}).finally(()=>{
    console.log("finally kuch toh hogya");
})


//.then bhi use kar sakte h ya  phir <<<async await bhi use kar skate>>>
const Promisefive = new Promise(function(){
    setTimeout(function () {
    
        let error = false;
        if(!error){
            resolve({name: "hello" , islogged : "true"});
        }
        else{
         reject("ERROR THROWED");
        }
    },1000)
})
async function consumePromisefive(){
    try {
        const response  = await Promisefive;
           console.log(response);
    } catch (error) {
        console.log('error agyaa');
    }
           
}
consumePromisefive();


//////////////////////////////////////////////////////////////////////////////////////

async function getAlluser(){
    try {
        const response = await fetch("url")
        //response aya jo h wo alag format h 
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }   

}

fetch('url').then((respone)=>{
    return json.respone
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log(error);
})
