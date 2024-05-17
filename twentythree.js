// java script execution contest  
 
// {code}  =>  global execution (this)-> windows in browser


// ->Global execution context 
// ->Function execution contest
// ->Eval execution context hota h 



var1 = 10 ;
var2 = 5 ;

function chai(num1,num2){
    return total = num1 + num2;
}
resultone = chai(var1,var2);
resulttwo = chai(10,5);

// code  - do phase me run hota h
// -> memeory creation phase  jagah di jaati h
// -> execution phase 



// pehla jo hota h sabse pehla woh hota h global execution jo ki this 


// memory phase
// pehle undefined jata h 
// var1 and var 2 = undefined

// addnumber  = defination
// resultone = unndefined
// result two  = undefined

//execution 
// var1 and var 2 = 10 and 5

// addnumber  = defination
// resultone = addnumber alag execution contest banatah ;;// new variable environment + execution thread  
                // yha ek box banega and usme aayega memory and execution phase
                //val1 = undefined
                //val2 = undefined
                //total = undefined

                // //execution 
                // num1 = 10 
                // num2 = 5
                // total = 15 

                // -> it will go back to global execution then it will delete the same 


// result two  = undefined



// case 2 me call stack me aya aur delete hua lifo
//3 function h toh hoga ye ki agar ek ek andar ek h toh wo call stack me jaega
