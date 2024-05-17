//immediately invoked function expression


(function chai() {
    // named IIFE 
    console.log('DB CONNECTED');

}
)();
// ye semicolon lagana jaruri h kyoki ye bataata h ki yaha end ho chuka h toh apan next function likh skte h 


//koi bhi function likh skteh h

( (name) => {
    console.log(`name ${name}`);

}
)('rahul');
//global scope ke pollution se dikkat ho sakti h toh usss
//pollution ko hatane ke liye hum ye imm invoked functionka use karte h
// chai();